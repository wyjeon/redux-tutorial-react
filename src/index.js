import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 1. createStore와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';

// 2. 스토어 만들고 현재 값 확인 해보기
const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
