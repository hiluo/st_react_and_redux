import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './views/ControlPannel'
import store from './Store.js'
import {Provider} from 'react-redux'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={store}><ControlPanel /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
