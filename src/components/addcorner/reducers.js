import { combineReducers } from 'redux';
import TYPES from 'actions/action_types';

export const step = (state = 1, action) => {
   
    switch(action.type) {
        case TYPES.SET_STEP:
            return action.payload;
        default:
            return state;
    }
    
}

const addCorner = combineReducers({
    step: step
}); 

export default addCorner;
