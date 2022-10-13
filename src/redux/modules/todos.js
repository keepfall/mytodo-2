const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

const initialState = [
  { id: 1, title: 'redux를 사용해보자.', body: 'redux가 어렵다.', isDone: false },
  { id: 2, title: 'redux-router-dom을 사용해보자.', body: '상세보기를 만들자.', isDone: false },
  { id: 3, title: '알고리즘 공부하기', body: '프로그래머스 lv.1 / 1주일 2문제 풀기', isDone: true },
  { id: 4, title: 'html 프로그래머', body: 'html 로 개발하기', isDone: true },
  { id: 5, title: '기록하기', body: 'TIL, WIL 작성', isDone: true },
  { id: 6, title: '자바스크립트 언어스터디', body: '챕터 10-1 / 리액트의 기본', isDone: true },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);

    case TOGGLE_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return { ...item };
        }
      });

    default:
      return state;
  }
};

export default todos;
