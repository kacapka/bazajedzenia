import TYPES from '../actions/action_types';

export default function(state = null, action) {
    
    switch(action.type) {
        case TYPES.SET_USER:
            return action.payload;
       default:
            return state;
    }
    
}