import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrements}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = { increment, decrement };

/* 
1. 기존 작성 방식
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
}); 
*/

/* 
2. bindActionCreators 사용
import { bindActionCreators } from 'redux'; // **** (1) 불러오기

(2) bindActionCreators 사용.
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increment, decrement }, dispatch); // **** (2) bindActionCreators 사용.
*/

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
