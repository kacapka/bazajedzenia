import { combineReducers } from 'redux';

import corners from './reducer_fetchcorners';
import kitchenTypes from './reducer_setkitchentypes';
import address from './reducer_getaddress';
import kitchen from './reducer_setvalue';
import checkbox from './reducer_checkbox';
import activeDay from './reducer_selectday';
import userTime from './reducer_gettime';
import selectedCorner from './reducer_selectcorner';


const rootReducer = combineReducers({
    //all corners
    corners,
    //all kithcen types
    kitchenTypes,
    //current address - user input or autolocation
    address,
    //selected kitchen types
    kitchen,
    //checkbox status in details filter
    checkbox,
    //selected day in details filter
    activeDay,
    //selected time
    userTime,
    //selected corner in corners filter section
    selectedCorner
});

export default rootReducer;