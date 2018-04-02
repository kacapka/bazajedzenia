import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import 'styles/ionicons.css';
import './styles/index.css';
import './styles/zindex.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import checkDevice from './utils/checkDevice';

import configStore from './store/configStore';
const store = configStore();

const rootEl = document.getElementById('bjApp');
const isMobile = checkDevice();
if(!isMobile) rootEl.classList.add('hover');

store.dispatch({type: 'DEVICE', isMobile});

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , rootEl
);

registerServiceWorker();
