import { combineReducers } from 'redux';

import filter from './filterReducer';
import data from './dataReducer';
import map from './mapReducer';
import addCorner from './addReducer';
import reviews from './detailsReducer';

const rootReducer = combineReducers({
    data,
    map,
    filter,
    addCorner,
    reviews
});

export default rootReducer;