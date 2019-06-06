import React, {Component} from 'react';

class ClickCounter extends Component {

    constructor(props) {
        //tips 1. 必须要调用父类的构造方法，否则组件不能正常初始化
        super(props);
        //tips 2. 成员函数绑定当前对象引用/this
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {
            count: 0
        }
    }

    onClickButton() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        const counterStyle = {
            margin: '16px'
        }
        return (
            <div style={counterStyle}>
                <button onClick={this.onClickButton}>点击我</button>
                <div>
                    点击次数 : <span id = "clickCount">{this.state.count}</span>
                </div>
            </div>
        );
    }
}

export default ClickCounter;