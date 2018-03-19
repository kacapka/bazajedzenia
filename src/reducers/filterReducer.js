import moment from 'moment';
import { combineReducers } from 'redux';
import TYPES from '../actions/action_types';
import bjTime from '../utils/bj_time';

const initialCheckbox = {
    delivery: false,
    openNow: false,
    chooseDate: false
}

const checkbox = (state = initialCheckbox, action) => {
    
    switch(action.type) {
        case TYPES.CHECKBOX_SELECT: 
            return {...state, ...action.payload}
        default:
            return state;
    }
}

const initialTime = bjTime.getSec(moment());

const time = (state = initialTime, action) => {
    
    switch(action.type) {
        case TYPES.GET_TIME: 
            return bjTime.getSec(action.payload);
        default: 
            return state;
    }
    
}

const initialDay = moment().day();

const day = (state = initialDay, action) => {
    
    switch(action.type) {
        case TYPES.SELECT_DAY: 
            return  state === action.payload ? null : action.payload;
        default:
            return state;
    }
    
}

const kitchen = (state = [], action) => {
        
    switch(action.type) {
        case TYPES.SET_VALUE: 
            return action.payload;
        default:
            return state;
    }   
}

const corner = (state = null, action) => {
    
    switch(action.type) {
        case TYPES.SELECT_CORNER:
            return action.payload;
        case TYPES.SELECT_CORNER_NULL:
            return null;
        default: 
            return state;
    }
    
}

const initialValue = 'Polecane restauracje';

const resultTitle = (state = initialValue, action) => {
    
    switch(action.type) {
        case TYPES.SET_RESULTS_TITLE:
            return action.payload;
        default:
            return state;
    }
    
}


const filter = combineReducers({
    checkbox,
    time,
    day,
    kitchen,
    corner,
    resultTitle
});


export default filter;