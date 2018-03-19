import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import 'styles/ionicons.css';
import './styles/index.css'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import configStore from './store/configStore';
const store = configStore();

const rootEl = document.getElementById('bjApp');

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , rootEl
);

registerServiceWorker();
