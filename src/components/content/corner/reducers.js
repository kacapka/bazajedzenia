import { combineReducers } from 'redux';
import TYPES from 'actions/action_types';

export const input = (state = '', action) => {
    
    switch(action.type) {
        case TYPES.UPDATE_INPUT:
            return action.payload
        default:
            return state;
    }   
    
}

export const rate = (state = null, action) => {
    
    switch(action.type) {
        case TYPES.UPDATE_RATES:
            return action.payload;
        default:
            return state;
    }   
    
}

export const comments = (state = null, action) => {
    
    switch(action.type) {
        case TYPES.FETCH_COMMENTS:
            return action.payload;
        default:
            return state;
    }
    
}

const reviews = combineReducers({
    input,
    rate,
    comments
});

export default reviews;
