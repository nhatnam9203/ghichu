import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import RootReducer from './REDUX/reducer/root.reducer';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import thunk from 'redux-thunk'

const store = createStore(
    RootReducer,
    applyMiddleware(thunk)
);



ReactDOM.render(
<Provider store={store}>
<HashRouter>
<App />
</HashRouter>
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
