import { combineReducers } from 'redux';

import user from './reducer_setuser';
import corners from './reducer_fetchcorners';
import address from './reducer_getaddress';
import kitchen from './reducer_setvalue';
import checkbox from './reducer_checkbox';
import activeDay from './reducer_selectday';
import userTime from './reducer_gettime';
import selectedCorner from './reducer_selectcorner';
import userCorners from './reducer_setusercorners';
import resultsTitle from './reducer_setresultstitle';
import showOnMap from './reducer_showcorneronmap';

//add corner
import addCorner from '../components/addcorner/reducers';

//comments
import reviews from '../components/content/corner/reducers';

const rootReducer = combineReducers({
    //user object
    user,
    //all corners
    corners,
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
    //userCorners for render list of corners and print on map
    userCorners,
    //title for corners list
    resultsTitle,
    //corner to show on map
    showOnMap,
    
    
    //add corner
    addCorner,
    
    //comments
    reviews
});

export default rootReducer;