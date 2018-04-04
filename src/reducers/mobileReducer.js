import { combineReducers } from 'redux';
import TYPES from 'actions/action_types';

const isMap = (state = false, action) => {
    
    switch(action.type) {
        case TYPES.TOGGLE_VIEW:
            return action.payload;
        default:
            return state;
    }
    
}

const isTop = (state = false, action) => {
    
    switch(action.type) {
        case TYPES.TOGGLE_TOP:
            return action.payload;
        default:
            return state;
    }
    
}

const isFilters = (state = false, action) => {
    
    switch(action.type) {
        case TYPES.TOGGLE_FILTERS:
            return action.payload;
        default:
            return state;
    }
    
}

const isNav = (state = false, action) => {
    
    switch(action.type) {
        case TYPES.TOGGLE_NAV:
            return action.payload;
        default:
            return state;
    }
    
}


const mobile = combineReducers({
    isMap,
    isTop,
    isFilters,
    isNav
});

export default mobile;