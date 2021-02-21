import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';

/* 
  리덕스와 연동된 컴포넌트를
  '컨테이너 컴포넌트'라고 부른다.

  단순히 props를 전달해주면
  그대로 보여주는 컴포넌트들은
  '프리젠테이셔널 컴포넌트'라고 부른다.

  컨테이너 컴포넌트 - smart 컴포넌트
  <PaletteContainer />

  프리젠테이셔널 컴포넌트 - dumb 컴포넌트
  <Palette />
*/

class PaletteContainer extends Component {
  handleSelect = (color) => {
    const { changeColor } = this.props;
    console.log('what');
    changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Palette onSelect={this.handleSelect} selected={color} />;
  }
}

// props로 넣어줄 스토어 상태값
const mapStateToProps = (state) => ({
  color: state.counter.color,
});

// props로 넣어줄 액션 생성함수
const mapDispatchToProps = (dispatch) => ({
  changeColor: (color) => dispatch(changeColor(color)),
});

// 컴포넌트에 리덕스 트오러를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);

/* 
  컨테이너 컴포넌트를 만들땐
  connect 함수를 사용한다.

  파라미터로 전달해주는
  'mapStateToProps'는
  스토어 안에 들어있는 값을 props로 전달해주고

  'mapDispatchToProps'는
  액션 생성함수들을 props로 전달해준다.
*/
