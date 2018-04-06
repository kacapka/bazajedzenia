import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import TYPES from 'actions/action_types';

import filter from './filterReducer';
import data from './dataReducer';
import map from './mapReducer';
import addCorner from './addReducer';
import reviews from './detailsReducer';
import mobile from './mobileReducer';

const isMobile = (state = false, action) => {
    
    switch(action.type) {
        case TYPES.DEVICE: return action.isMobile;
        default: return state;
    }
}

const dataPersistConfig = {
    storage,
    key: 'data',
    whitelist: ['resultCorners']
}

const mapPersistConfig = {
    storage,
    key: 'map',
    whitelist: ['activeMarkers']
}

const rootReducer = combineReducers({
    data: persistReducer(dataPersistConfig, data),
    map: persistReducer(mapPersistConfig, map),
    isMobile,
    filter,
    addCorner,
    reviews,
    mobile
});

export default rootReducer;