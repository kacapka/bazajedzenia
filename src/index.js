import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import 'styles/ionicons.css';
import './index.css'
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

export const store = createStore(reducers, applyMiddleware(thunk, ReduxPromise));

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('bjApp')
);

registerServiceWorker();
