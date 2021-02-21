import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../store/modules/counter';
import Palette from '../components/Palette';

class PaletteContainer extends Component {
  handleSelect = (color) => {
    const { CounerActions } = this.props;
    CounerActions.changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Palette onSelect={this.handleSelect} selected={color} />;
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
});

const mapDispatchToProps = (dispatch) => ({
  CounerActions: bindActionCreators(counterActions, dispatch),
});

// connect 함수를 사용하여 컴포넌트에 스토어 연동하기
export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);
