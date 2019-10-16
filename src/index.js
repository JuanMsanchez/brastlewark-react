import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import Routes from './routes';

import thunk from 'redux-thunk';
import mainReducer from './reducers/mainReducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './components/main.scss';

let store = createStore(
    mainReducer,
    applyMiddleware(thunk)
);

let rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    rootElement
);
