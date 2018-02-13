import moment from 'moment';
import { GET_TIME } from 'actions/index';
import bjTime from '../utils/bj_time';

const initialState = bjTime.getSec(moment());

export default function(state = initialState, action) {
    
    switch(action.type) {
        case GET_TIME: 
            return bjTime.getSec(action.payload);
        default: 
            return state;
    }
    
}