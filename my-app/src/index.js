import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './index/App';
import createStore from './store/index';
import registerServiceWorker from './registerServiceWorker';
import reducers from './redecers/index';

const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
