import moment from 'moment';
import { SELECT_DAY } from 'actions/index';

const initialState = moment().day();

export default function(state = initialState, action) {
    
    switch(action.type) {
        case SELECT_DAY: 
            return  state === action.payload ? null : action.payload;
        default:
            return state;
    }
    
}