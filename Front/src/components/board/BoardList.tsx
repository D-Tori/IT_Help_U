import React, { useEffect, useCallback } from 'react';
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

type BoardPropsType = {
  boards: BoardsState
}

function BoardList () {

  const dispatch = useDispatch();
  const boardState = useBoards();


  const initFetch = useCallback(() => {
    dispatch(getBoardRequest());
  }, [dispatch]);


  useEffect(() => {
    initFetch();
  }, []);

  const boards = boardState.boards;


  return(
    <BoardListContainer>
      <ul>
        {boards.map((board, index) => (
          <BoardItem board={board} key={index} />
        ))}
      </ul>
    </BoardListContainer>
  )
}

export default BoardList;


