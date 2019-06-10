import React, { Component} from 'react';
import Counter from './Counter.js';

const style = {
    margin: '20px'
};

class ControlPannel extends Component {
    render() {
        return (
            <div style={style}>
                <Counter caption="First"/>
                <Counter caption="Second" initValue={10}/>
                <Counter caption="Third" initValue={20}/>
                <button onClick={() => this.forceUpdate()}>
                    Click me to re-ender!
                </button>
            </div>
        );
    }
}

export default ControlPannel
