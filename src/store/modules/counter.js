/* 
  모듈에는
  액션과, 액션생성함수와, 
  초깃값과, 리듀서함수가 들어있다.
*/

// 1.액션 타입 정의하기
const CHANGE_COLOR = "counter/CHANGE_COLOR"; // Ducks 패턴을 사용할 때
const INCREMENT = "counter/INCREMENT"; // 액션 이름을 지을 때
const DECREMENT = "counter/DECREMENT"; // 문자열 앞부분에 모듈 이름을 넣는다.

// 2. 액션 생성함수 정의하기
export const changeColor = (color) => ({ type: CHANGE_COLOR, color }); // 액션 생성함수를 정의할 땐
export const increment = () => ({ type: INCREMENT }); // export 해준다.
export const decrement = () => ({ type: DECREMENT }); // 나중에 리덕스를 연동하고 사용한다.

// 3. 초기상태 정의하기
const initialState = {
  color: "red",
  number: 0
};

// 4. 리듀서 작성
export default function counter(state = initialState, action) {
  // 리듀서 함수는 꼭 export default 해준다.
  // 나중에 스토어를 만들 때 필요하다.
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };

    default:
      return state;
  }
}
