import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions.js'

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    render() {
        const {caption, onIncrement, onDecrement, value} = this.props;

        return (
            <div>
                <button style={buttonStyle} onClick={onIncrement}>+</button>
                <button style={buttonStyle} onClick={onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}


/**
 * 1.组件生命周期对应的各个函数的回调
 * 2.组件参数(props)的默认值的使用
 * 3.组件参数有效性的检查
 */
class CounterContainer extends Component {

    constructor(props, context) {
        console.log('enter constructor, caption is ' + props.caption);

        //tips 1. 必须要调用父类的构造方法，否则组件不能正常初始化
        super(props, context);
        //tips 2. 成员函数绑定当前对象引用/this
        this.onClickDecreamButton = this.onClickDecreamButton.bind(this);
        this.onClickIncreamButton = this.onClickIncreamButton.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: this.context.store.getState()[this.props.caption]
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
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }

    onClickIncreamButton() {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }

    onClickDecreamButton() {
        this.context.store.dispatch(Actions.decrement(this.props.caption))
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
        return(
            <Counter caption={this.props.caption}
            onIncrement={this.onClickIncreamButton}
            onDecrement={this.onClickDecreamButton}
            value={this.state.value}/>
        );
    }
}

//  React v15.5 起，React.PropTypes 已移入另一个包中。请使用 prop-types 库 代替
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
  };

CounterContainer.contextTypes = {
    store: PropTypes.object
}

export default CounterContainer;