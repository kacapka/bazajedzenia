import { SET_KITCHEN_TYPES } from 'actions/index';

export default function( state = [], action) {
    
    switch(action.type) {
        case SET_KITCHEN_TYPES:
            return action.payload;
        default:
            return state;
    }
    
}