import { combineReducers } from 'redux';
import TYPES from 'actions/action_types';


const corner = (state = null, action) => {
    
    switch(action.type) {
        case TYPES.SHOW_CORNER_ON_MAP:
            return action.payload;
        default:
            return state;
    }
    
}

const address = (state = null, action) => {
        
    switch(action.type) {
        case TYPES.GET_ADDRESS: 
            return action.payload;
        default:
            return state;
    }   
}

const map = combineReducers({
    corner,
    address
});

export default map;