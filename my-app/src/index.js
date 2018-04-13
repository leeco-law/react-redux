import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './index/App';
import createStore from './index/store/index';
import registerServiceWorker from './registerServiceWorker';
import reducers from './index/reducers/index';

const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
