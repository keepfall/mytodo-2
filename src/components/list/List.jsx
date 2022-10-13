import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toggleTodo, removeTodo } from '../../redux/modules/todos';

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const onRemove = (id) => {
    dispatch(removeTodo(id));
  };
  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <StList>
      <StWorking>
        <h2>Working</h2>
        {todos.map((item) => {
          if (!item.isDone) {
            return (
              <StBox key={item.id}>
                <Link style={{ textDecoration: 'none', color: '#f5f5f5' }} to={`/${item.id}`}>
                  <StText>
                    <h2>{item.title}</h2>
                    <div>{item.body}</div>
                  </StText>
                </Link>
                <StBtn>
                  <button onClick={() => onRemove(item.id)}>삭제</button>
                  <button onClick={() => onToggle(item.id)}>{item.isDone ? '취소' : '완료'}</button>
                </StBtn>
              </StBox>
            );
          } else {
            return null;
          }
        })}
      </StWorking>
      <StDone>
        <h2>Done</h2>
        {todos.map((item) => {
          if (item.isDone) {
            return (
              <StBox key={item.id}>
                <Link style={{ textDecoration: 'none', color: '#f5f5f5' }} to={`/${item.id}`}>
                  <StText>
                    <h2>{item.title}</h2>
                    <div>{item.body}</div>
                  </StText>
                </Link>
                <StBtn>
                  <button onClick={() => onRemove(item.id)}>삭제</button>
                  <button onClick={() => onToggle(item.id)}>{item.isDone ? '취소' : '완료'}</button>
                </StBtn>
              </StBox>
            );
          } else {
            return null;
          }
        })}
      </StDone>
    </StList>
  );
};

const StList = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 0 30px 30px 30px;
  gap: 30px;
  background-color: #6ec6ca;
`;

const StWorking = styled.div`
  display: block;
  width: 50%;
`;

const StDone = styled.div`
  display: block;
  width: 50%;
`;

const StBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  height: 100px;
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  background-color: #08979d;
`;

const StText = styled.div`
  display: block;
  margin-bottom: 20px;
`;

const StBtn = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default List;
