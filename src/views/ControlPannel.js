import React, { Component} from 'react';
import CounterContainer from './Counter.js';
import Summary from './Summary.js';

const style = {
    margin: '20px'
};

class ControlPannel extends Component {

    render() {
        return (
            <div style={style}>
                <CounterContainer caption="First" />
                <CounterContainer caption="Second" />
                <CounterContainer caption="Third" />
                <Summary/>
            </div>
        );
    }
}

export default ControlPannel
