import TYPES from 'actions/action_types';

export default function(state = [], action) {
        
    switch(action.type) {
        case TYPES.SET_VALUE: 
            return action.payload;
        default:
            return state;
    }   
}