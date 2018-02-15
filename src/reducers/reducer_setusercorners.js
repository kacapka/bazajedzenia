import { SET_USER_CORNERS } from 'actions/index';
import { FETCH_RECOMMENDED_CORNERS } from 'actions/index';

export default function( state = null, action) {
    
    switch(action.type) {
        case SET_USER_CORNERS:
            return action.payload;
        case FETCH_RECOMMENDED_CORNERS:
            return action.payload;
        default:
            return state;
    }
    
}