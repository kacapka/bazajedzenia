import TYPES from 'actions/action_types';

export default function(state = null, action) {
    
    switch(action.type) {
        case TYPES.SELECT_CORNER:
            return action.payload;
        default: 
            return state;
    }
    
}