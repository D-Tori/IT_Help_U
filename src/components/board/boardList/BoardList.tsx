import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';

import useBoards from '../../../hooks/useBoards';


const BoardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 15px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

function BoardList () {
  const boards = useBoards();
  console.log(boards);
  return(
    <BoardListContainer>
      <ul>
        {boards.map(board => (
          <BoardItem board={board} key={board.id} />
        ))}
      </ul>
    </BoardListContainer>
  )
}

export default BoardList;
