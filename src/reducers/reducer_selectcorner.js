import { SELECT_CORNER } from 'actions/index';

export default function(state = null, action) {
    
    switch(action.type) {
        case SELECT_CORNER:
            return action.payload;
        default: 
            return state;
    }
    
}