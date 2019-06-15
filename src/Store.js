import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValus = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

const store = createStore(reducer, initValus);

export default store;