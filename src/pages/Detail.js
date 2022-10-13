import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const detail = todos.find((item) => item.id === +id);

  return (
    <StDetail key={detail.id}>
      <div>
        <div>ID : {detail.id}</div>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          이전
        </button>
        <div>
          <div>제목 : {detail.title}</div>
          <div>내용 : {detail.body}</div>
        </div>
      </div>
    </StDetail>
  );
};

export default Detail;
