import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';
import CounterStroe from './CounterStrore.js';

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function() {
        return computeSummary(CounterStroe.getCounterValues());
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeLister: (callback) => {
        this.removeEventListener(CHANGE_EVENT, callback);
    }
});

SummaryStore.dispatcherToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT || 
        (action.type === ActionTypes.DECREMENT)) {
        AppDispatcher.waitFor([CounterStroe.dispatchToken]);        
        SummaryStore.emitChange();
    }
});

export default SummaryStore;