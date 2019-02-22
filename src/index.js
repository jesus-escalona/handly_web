import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { BrowserRouter as Router } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {clientReducer} from "./Reducers/clientsReducer";

const store = createStore(clientReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
