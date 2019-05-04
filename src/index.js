import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import allReducers from './components/reducers';
import {createStore, applyMiddleware} from 'redux';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Content from './components/Content/Content';
import Routes from './components/Routes/Routes';

devServer: {
    historyApiFallback: true
}

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render
(
    <Provider store={store}>
        <App>
            <Routes/>
        </App>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
