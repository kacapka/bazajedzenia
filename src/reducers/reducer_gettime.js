import moment from 'moment';
import TYPES from 'actions/action_types';
import bjTime from '../utils/bj_time';

const initialState = bjTime.getSec(moment());

export default function(state = initialState, action) {
    
    switch(action.type) {
        case TYPES.GET_TIME: 
            return bjTime.getSec(action.payload);
        default: 
            return state;
    }
    
}