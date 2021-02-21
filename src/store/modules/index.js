import { combineReducers } from 'redux';
import counter from './counter';
import waiting from './waiting';

// combineReducers 로 리듀서 합치기
export default combineReducers({
  counter,
  waiting,
});
