import { SET_VALUE } from 'actions/index';

export default function(state = [], action) {
        
    switch(action.type) {
        case SET_VALUE: 
            return action.payload;
        default:
            return state;
    }   
}