import { combineReducers } from 'redux';

import getAddress from './reducer_getaddress';

const rootReducer = combineReducers({
    address: getAddress
});

export default rootReducer;