import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux';

// 리덕스 개발자 도구 적용하기
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// 스토어 만들기
const store = createStore(rootReducer, devTools);

// Provider 를 사용하여 리액트 프로젝트에 스토어 연동
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
