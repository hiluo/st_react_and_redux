import React, { Component} from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
    margin: '20px'
};

class ControlPannel extends Component {

    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0, 10, 20];
        const initSum = this.initValues.reduce((a, b ) => a + b , 0);
        this.state = {
            sum : initSum
        }
    }

    render() {
        return (
            <div style={style}>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <Summary/>
            </div>
        );
    }

    onCounterUpdate(newValue, preiousValue) {
        const valueChange = newValue - preiousValue;
        this.setState({sum: this.state.sum + valueChange});
    }
}

export default ControlPannel
