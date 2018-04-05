import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import TYPES from 'actions/action_types';

import 'normalize.css';
import 'styles/ionicons.css';
import './styles/index.css';
import './styles/zindex.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import checkDevice from './utils/checkDevice';
import { setPersistedState } from 'actions/dataActions';


import configStore from './store/configStore';
const store = configStore();

const rootEl = document.getElementById('bjApp');
const isMobile = checkDevice();

//save user device to store - bool
store.store.dispatch({type: TYPES.DEVICE, isMobile})

//hover pseudo class only aviable on desktop devices
if(!isMobile) rootEl.classList.add('hover');

//set persisted state for resultcorners
setPersistedState();

ReactDOM.render(
    <Provider store={store.store} >
        <PersistGate loading={<div>loading...</div>} persistor={store.persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , rootEl
);

registerServiceWorker();
