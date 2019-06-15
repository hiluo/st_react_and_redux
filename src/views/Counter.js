import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions.js'
import store from '../Store.js';

const buttonStyle = {
    margin: '10px'
};
/**
 * 1.组件生命周期对应的各个函数的回调
 * 2.组件参数(props)的默认值的使用
 * 3.组件参数有效性的检查
 */
class Counter extends Component {

    constructor(props) {
        console.log('enter constructor, caption is ' + props.caption);

        //tips 1. 必须要调用父类的构造方法，否则组件不能正常初始化
        super(props);
        //tips 2. 成员函数绑定当前对象引用/this
        this.onClickDecreamButton = this.onClickDecreamButton.bind(this);
        this.onClickIncreamButton = this.onClickIncreamButton.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        }
    }
    
    // getInitialState() {
    //     console.log('enter getInitialState, caption is ' + this.props.caption);
    // }

    //Warning: getDefaultProps was defined on Counter, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead
    // getDefaultProps() {
    //     console.log('enter getDefaultProps');
    // }

    componentWillMount() {
        console.log('enter componentWillMount, caption is ' + this.props.caption);
    }

    componentDidMount() {
        console.log('enter componentDidMount, caption is ' + this.props.caption);
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    onClickIncreamButton() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onClickDecreamButton() {
        store.dispatch(Actions.decrement(this.props.caption))
    }

    onChange() {
        this.setState(this.getOwnState);
    }

    componentWillReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps, caption is  ' + this.props.caption);
        console.log('nextProps, caption is ' + nextProps.caption);
    }

    render() {
        console.log('enter render, caption is ' + this.props.caption);
        const {caption} = this.props;
        const value = this.state.value;
        return(
            <div>
                <button style={buttonStyle} onClick={this.onClickIncreamButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecreamButton}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }
}

//  React v15.5 起，React.PropTypes 已移入另一个包中。请使用 prop-types 库 代替
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
  };

export default Counter;