import { combineReducers } from 'redux';

import address from './reducer_getaddress';
import value from './reducer_setvalue';
import checkbox from './reducer_checkbox';
import activeDay from './reducer_selectday';


const rootReducer = combineReducers({
    address: address,
    value: value,
    checkbox: checkbox,
    activeDay: activeDay
});

export default rootReducer;