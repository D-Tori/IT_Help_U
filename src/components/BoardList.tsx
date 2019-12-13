import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';


const BoardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 10px;
`;

function BoardList () {
  return(
    <BoardListContainer>
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
    </BoardListContainer>
  )
}

export default BoardList;