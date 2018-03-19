import TYPES from './action_types';
import { fetchCornersDB, setAuthStateChange, fetchPhotoSB } from '../firebase.js';
import { getRandomNumbers } from 'utils/bj_random';
import { getCornerPhotos } from 'selectors/data/dataSelector';

//set event on users auth status
export const setUser = () => {
    
    return (dispatch) => {
           
        setAuthStateChange()
            .onAuthStateChanged(user => {
            dispatch({
                type: TYPES.SET_USER,
                payload: user
            })
        })
    }  
}

// get all corners before app is showed
// or get recommended corners as a default ones
export const fetchCorners = (condition) => {
    let PATH, actionType;
    
    if(condition === 'all') {
        PATH = 'corners'; 
        actionType = TYPES.FETCH_ALL_CORNERS;
    } else if(condition === 'recommended') {
        PATH = 'recommended';
        actionType = TYPES.FETCH_RECOMMENDED_CORNERS;
    } 
    
    return (dispatch) => {
        fetchCornersDB(PATH)
            .then(corners => {
            dispatch({
                type: actionType,
                payload: corners.val()
            })
        })
    } 
}

export const savePhotos = (path, id) => {
    
    return (dispatch) => {
        fetchPhotoSB(path).then(photoURL => {
            dispatch({
                type: TYPES.FETCH_PHOTO,
                payload: {
                    id,
                    url: {
                        original: photoURL, 
                        thumbnail: photoURL    
                    }
                }
            })
        })     
    }
}

export const fetchPhoto = (id) => (dispatch, getState) => {
    
    const currentPhotos = getCornerPhotos(id)(getState());
    
    if(currentPhotos) {
        dispatch({type: 'CANCEL'});
        return;
    }
    
    const numbers = getRandomNumbers(5, 10);
    numbers.forEach(num => {
        dispatch(savePhotos(num, id));    
    })
}
 