import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';


//TODO : 使用Immutable数据
const counterValues = {
    'First' : 0,
    'Second' : 10,
    'Third': 30
};


//还可以使用,flux/utils的类来构建stroe

const CounterStroe = Object.assign({}, EventEmitter.prototype, {
    getCounterValues : function() {
        return counterValues;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    }

});

CounterStroe.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption]++;
        CounterStroe.emitChange();
    } else if (action.type ===ActionTypes.DECREMENT) {
        counterValues[action.counterCaption]--;
        CounterStroe.emitChange();
    }
});

export default CounterStroe;