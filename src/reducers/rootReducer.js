import { combineReducers } from 'redux';

import filter from './filterReducer';
import data from './dataReducer';
import map from './mapReducer';
import addCorner from './addReducer';
import reviews from './detailsReducer';
import mobile from './mobileReducer';

const isMobile = (state = false, action) => {
    switch(action.type) {
        case 'DEVICE': return action.isMobile;
        default: return state;
    }
}

const rootReducer = combineReducers({
    isMobile,
    data,
    map,
    filter,
    addCorner,
    reviews,
    mobile
});

export default rootReducer;