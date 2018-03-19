import { combineReducers } from 'redux';
import TYPES from 'actions/action_types';

const user = (state = null, action) => {
    
    switch(action.type) {
        case TYPES.SET_USER:
            return action.payload;
       default:
            return state;
    }
    
}

const corners = (state = [], action) => {
    
    switch(action.type) {
        case TYPES.FETCH_ALL_CORNERS: 
            return action.payload;
        default: 
            return state;
    }
    
}

const resultCorners = ( state = [], action) => {
    
    switch(action.type) {
        case TYPES.SET_USER_CORNERS:
            return action.payload;
        case TYPES.FETCH_RECOMMENDED_CORNERS:
            return action.payload;
        default:
            return state;
    }
    
}

const initialImages = {
  byId: [],
  byHash: {}
}

const addURLs = (state, payload) => {
    return state.byHash[payload.id] ?  [...state.byHash[payload.id], payload.url] : [payload.url];      
}

const images = (state = initialImages, action) => {
    
    switch(action.type) {
        case TYPES.FETCH_PHOTO:
            let id = action.payload.id;
            return {
                byId: [ ...state.byId, id],
                byHash: {
                    ...state.byHash,
                    [id]: addURLs(state, action.payload)
                    }    
                };
            
        default:
            return state;
    }
    
}


const data = combineReducers({
    user,
    corners,
    resultCorners,
    images
});


export default data;