import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

        this.state = {
            count: props.initValue
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
    }

    onClickIncreamButton() {
        this.setState({count: this.state.count + 1});
    }

    onClickDecreamButton() {
        this.setState({count: this.state.count -1});
    }

    componentWillReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps, caption is  ' + this.props.caption);
        console.log('nextProps, caption is ' + nextProps.caption);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('enter shouldComponentUpate, caption is ' + this.props.caption)
        console.log('nextProps, caption is ' + nextProps.caption);
        console.log('nextState, count is ' + nextState.count);
        //, nextProps is ' + nextProps.toString() + ', nextState is ' + nextState.toString());
        return (nextProps.caption !== this.props.caption) || 
                (nextState.count !== this.state.count);
    }

    render() {
        console.log('enter render, caption is ' + this.props.caption);
        return(
            <div>
                <button style={buttonStyle} onClick={this.onClickIncreamButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecreamButton}>-</button>
                <span>{this.props.caption} count: {this.state.count}</span>
            </div>
        );
    }
}

//  React v15.5 起，React.PropTypes 已移入另一个包中。请使用 prop-types 库 代替
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
  };

//定义默认值  
Counter.defaultProps = {
    initValue: 12
};

export default Counter;