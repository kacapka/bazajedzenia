//import axios from 'axios';
import bjLocation from '../utils/bj_location';
import TYPES from './action_types';
import { getCornerById } from '../selectors/selector_getcornerbyid';
import { fetchCornersDB, setAuthStateChange } from '../firebase.js';

const google = window.google;


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

//get addres from searchbar input
//check user location
//if out of Warsaw ask for continue
export function getAddress(place) {   
   
    const isInWarsaw = bjLocation.isAddressInWarsaw(place);
    if (!isInWarsaw) return {type: 'ACTION_CANCEL'};

    return {
        type: TYPES.GET_ADDRESS,
        payload: place.geometry.location
    }
    
}

//get user location based on async action
export function getMyLocation() {
    
    return (dispatch) => {
        bjLocation.getUserLocation(data => {
            const latLng = new google.maps.LatLng(
                data.coords.latitude,
                data.coords.longitude
            );
            const address = new google.maps.Geocoder();
            address.geocode(
                {location: latLng},
                (result, status) => {
                    if(status === 'OK') {
                        if (result[0]) {
                            dispatch(getAddress(result[0]));
                        } else {
                            alert('nie znaleziono adresu');
                        }
                    } else {
                        alert(`przeglądarka nie może ustalić Twojego położenia. ERROR: ${status}`);
                    }
                }
            )
            
        });    
    }  
}

//set values in input kitechn types
//get user's choice of all kitchen types
export function setValue(value) {
    
    return {
        type: TYPES.SET_VALUE,
        payload: value
    }
    
}

//select checkbox in filter details section
export function checkboxSelect(input) {
     
    if (input.chooseDate) input.openNow = false;
    if (input.openNow) input.chooseDate = false;
    
    return {
        type: TYPES.CHECKBOX_SELECT,
        payload: input
    }
}

//select and get user choice of day of week in details filter
export function selectDay(id) {
    
    return {
        type: TYPES.SELECT_DAY,
        payload: id
    }
    
}

//select and get user time in details filter
export function getTime(value) {
    
    return {
        type: TYPES.GET_TIME,
        payload: value
    }
    
}

//select and get corner from user input in cornerssearchbar section
export const selectCorner = id => (dispatch, getState)  => {
    
    let corner = getCornerById(id)(getState());
    dispatch({
        type: TYPES.SELECT_CORNER,
        payload: { label: corner.name, street: corner.street, id }
    }); 
}

//set result of user choices to render list of corners in filter list section
export function setUserCorners(corners) {
    
    return {
        type: TYPES.SET_USER_CORNERS,
        payload: corners
    }
    
}

//set results title for corners list
export function setResultsTitle(title) {
    
    return {
        type: TYPES.SET_RESULTS_TITLE,
        payload: title
    }
    
}

//set results title for corners list
export function showCornerOnMap(id) {
    
    const random = Math.random();
 
    return {
        type: TYPES.SHOW_CORNER_ON_MAP,
        payload: [parseInt(id, 10), random]
    }
    
}
