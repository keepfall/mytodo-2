import React from 'react';
import styled from 'styled-components';

const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 30px;
  background-color: #cca8d8;
`;

const Header = () => {
  return (
    <StHeader>
      <div>My To Do List</div>
      <div>React</div>
    </StHeader>
  );
};

export default Header;
