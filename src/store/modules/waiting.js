import { createAction, handleActions } from 'redux-actions';

// 1. 액션 타입 정의하기
const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; // 나감

let id = 3;
// 2. createAction 사용하기
export const changeInput = createAction(CHANGE_INPUT, (text) => text);
export const create = createAction(CREATE, (text) => ({ text, id: id++ }));
export const enter = createAction(ENTER, (id) => id);
export const leave = createAction(LEAVE, (id) => id);

/* 
  데이터에 고유 id를 주는 작업은 리듀서에서 발생하면 안되고
  액션이 스토어에 디스패치 되기 전에 이뤄져야 한다.
*/

// 3. 초기 상태 정의
const initialState = {
  input: '',
  list: [
    {
      id: 0,
      name: '홍길동',
      entered: true,
    },
    {
      id: 1,
      name: '콩쥐',
      entered: false,
    },
    {
      id: 2,
      name: '팥쥐',
      entered: false,
    },
  ],
};

// 4. 리듀서 정의
export default handleActions(
  // handleAction을 사용하면 더이상 switch / case 문을 사용할 필요가 없다.
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [CREATE]: (state, action) => ({
      ...state,
      list: state.list.concat({
        id: action.payload.id,
        name: action.payload.text,
        entered: false,
      }),
    }),
    [ENTER]: (state, action) => ({
      ...state,
      list: state.list.map((item) =>
        item.id === action.payload ? { ...item, entered: !item.entered } : item
      ),
    }),
    [LEAVE]: (state, action) => ({
      ...state,
      list: state.list.filter((item) => item.id !== action.payload),
    }),
  },
  initialState
);

/* 
  // 2. 액션 생성함수 만들기
  export const changeInput = (text) => ({ type: CHANGE_INPUT, payload: text });
  export const create = (text) => ({ type: CREATE, payload: text });
  export const enter = (id) => ({ type: ENTER, payload: id });
  export const leave = (id) => ({ type: LEAVE, payload: id });

  redux-actions의 createAction이라는 함수를 사용하여
  액션 함수를 간편하게 생성한다.
  
  FSA 규칙을 따르는 액션 객체를 만들어야 한다.

  FSA에서 다음 조건을 필수로 갖추고 있어야한다.
  - 순수 자바스크립트 객체
  - type 값

  다음 조건은 선택적으로 필요하다.
  - error 값
  - payload 값
  - meta 값
*/
