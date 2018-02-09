import { combineReducers } from 'redux';

import address from './reducer_getaddress';
import value from './reducer_setvalue';

const rootReducer = combineReducers({
    address: address,
    value: value
});

export default rootReducer;