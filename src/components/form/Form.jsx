import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../../redux/modules/todos';

const Form = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [inputTitle, setInputTitle] = useState('');
  const [inputBody, setInputBody] = useState('');

  const onClick = (e) => {
    if (inputTitle === '') return alert('제목을 입력해주세요.');
    if (inputBody === '') return alert('내용을 입력해주세요.');
    dispatch(addTodo({ id: todos.length + 1, title: inputTitle, body: inputBody, isDone: false }));
    setInputTitle('');
    setInputBody('');
  };

  return (
    <StForm>
      <StInputSet>
        <label>제목</label>
        <input type="text" onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} />
        <label>내용</label>
        <input type="text" onChange={(e) => setInputBody(e.target.value)} value={inputBody} />
      </StInputSet>
      <button onClick={onClick}>추가</button>
    </StForm>
  );
};

const StForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  margin-top: 10px;
  padding: 0 30px;
  background-color: #8474a1;
`;

const StInputSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export default Form;
