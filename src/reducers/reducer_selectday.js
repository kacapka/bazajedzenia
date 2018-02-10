import { SELECT_DAY } from 'actions/index';

export default function(state = null, action) {
    
    switch(action.type) {
        case SELECT_DAY: 
            return  state === action.payload ? null : action.payload;
        default:
            return state;
    }
    
}