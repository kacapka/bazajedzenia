import TYPES from 'actions/action_types';

export default function( state = [], action) {
    
    switch(action.type) {
        case TYPES.SET_USER_CORNERS:
            return action.payload;
        case TYPES.FETCH_RECOMMENDED_CORNERS:
            return action.payload;
        default:
            return state;
    }
    
}