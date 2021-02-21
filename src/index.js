import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// createStore와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';

// 리덕스 개발자도구 적용하기
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
