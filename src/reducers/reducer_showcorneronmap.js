import TYPES from 'actions/action_types';

export default function(state = null, action) {
    
    switch(action.type) {
        case TYPES.SHOW_CORNER_ON_MAP:
            return action.payload;
        default:
            return state;
    }
    
}