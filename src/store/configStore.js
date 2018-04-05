import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import reducers from '../reducers/rootReducer';

const configStore = (preloadedState) => {
    
    const middlewares = [thunk, ReduxPromise ];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    
    const storeEnhancer = [middlewareEnhancer];
    
    const composedEnhancer = compose(...storeEnhancer);
    
    const store = createStore(
        reducers,
        preloadedState,
        composedEnhancer
    );
    
    const persistor = persistStore(store);
    
    return { store, persistor }
    
}

export default configStore;