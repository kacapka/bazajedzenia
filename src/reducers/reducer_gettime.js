import moment from 'moment';
import { GET_TIME } from 'actions/index';

//get selected time in seconds 
const getSec = (value) => { 
    return value.hour() * 3600 + value.minute() * 60;
}

const initialState = getSec(moment());

export default function(state = initialState, action) {
    
    switch(action.type) {
        case GET_TIME: 
            return getSec(action.payload);
        default: 
            return state;
    }
    
}