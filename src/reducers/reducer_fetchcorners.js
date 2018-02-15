import { FETCH_ALL_CORNERS } from 'actions/index';

export default function(state = [], action) {
    
    switch(action.type) {
        case FETCH_ALL_CORNERS: 
            return action.payload;
        default: 
            return state;
    }
    
}