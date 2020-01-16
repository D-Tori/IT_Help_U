import React, { useEffect } from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';

import useBoards from '../../hooks/useBoards';
import { useDispatch } from 'react-redux';
import { getBoardRequest, BoardsState } from '../../modules/boards';


const BoardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

function BoardList () {

  const dispatch = useDispatch();
  const boardState = useBoards();
  const boards = boardState.boards;

  useEffect(() => {
    dispatch(getBoardRequest());
  }, []);



  console.log('boards : ', boards);

  return(
    <BoardListContainer>
      <ul>
        {boards ? boards.map((board, index) => (
          <BoardItem board={board} key={index} />
        )) : <p>게시글이 없습니다.</p>
        }
      </ul>
    </BoardListContainer>
  )
}

export default BoardList;


