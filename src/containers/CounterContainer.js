import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as counterActions from '../store/modules/counter';

import Counter from '../components/Counter';
//import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    const { CounerActions } = this.props;
    CounerActions.increment();
  };

  handleDecrement = () => {
    const { CounerActions } = this.props;
    CounerActions.decrement();
  };

  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  CounerActions: bindActionCreators(counterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
