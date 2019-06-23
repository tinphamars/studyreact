import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
    // applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)),
);

ReactDOM.render(
    <Route>
        <Provider store={store}>
            <App />
        </Provider>
    </Route>,
    document.getElementById('root')
);

serviceWorker.unregister();
