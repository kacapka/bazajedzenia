import { combineReducers } from 'redux';

import corners from './reducer_fetchcorners';
import kitchenTypes from './reducer_setkitchentypes';
import address from './reducer_getaddress';
import kitchen from './reducer_setvalue';
import checkbox from './reducer_checkbox';
import activeDay from './reducer_selectday';
import userTime from './reducer_gettime';
import selectedCorner from './reducer_selectcorner';
import userCorners from './reducer_setusercorners';


const rootReducer = combineReducers({
    //all corners
    corners,
    //all kitchen types
    kitchenTypes,
    //current address - user input or autolocation
    address,
    //selected kitchen types - obj with par value and label
    kitchen,
    //checkboxes status in details filter
    checkbox,
    //selected day in details filter
    activeDay,
    //selected time, value in seconds
    userTime,
    //selected corner in corners searchbar
    selectedCorner,
    //userCorners for render list of corners
    userCorners
});

export default rootReducer;