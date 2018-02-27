import moment from 'moment';
import TYPES from 'actions/action_types';

const initialState = moment().day();

export default function(state = initialState, action) {
    
    switch(action.type) {
        case TYPES.SELECT_DAY: 
            return  state === action.payload ? null : action.payload;
        default:
            return state;
    }
    
}