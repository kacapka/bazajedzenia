import { combineReducers } from 'redux';
import TYPES from 'actions/action_types';

const input = (state = '', action) => {
    
    switch(action.type) {
        case TYPES.UPDATE_INPUT:
            return action.payload
        default:
            return state;
    }   
    
}

const rate = (state = null, action) => {
    
    switch(action.type) {
        case TYPES.UPDATE_RATES:
            return action.payload;
        default:
            return state;
    }   
    
}

const comments = (state = null, action) => {
    
    switch(action.type) {
        case TYPES.FETCH_COMMENTS:
            return action.payload;
        default:
            return state;
    }
    
}

const initialValidate = { rating: '', text: '' }

const validate = (state = initialValidate, action) => {
    
    switch(action.type) {
        case TYPES.VALIDATE_COMMENT:
            return { ...state, ...action.payload };
        case TYPES.VALIDATE_RESET:
            return initialValidate;
        default:
            return state;
    }
    
}

const reviews = combineReducers({
    input,
    rate,
    comments,
    validate
});

export default reviews;
