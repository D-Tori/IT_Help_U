import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import IdDateComponent from './IdDateComponent';

import BoardState from './BoardState';
import { Board } from '../modules/boards';


const TitleWrapper = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;


  h5 {
    display: flex;
  }

  h5 a {
    display: flex;
    font-size: 14px;
    margin: 5px;
  }

  .avatar-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 13px;
    color: #bbb;
  }


  @media (max-width: 767px) {
    margin-bottom: 10px;
  }

`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;

  .id-date-container {
    display: flex;
    margin-bottom: 5px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const BoardItemContainer = styled.li`
  display: flex;
  width: 100%;
  border: 1px solid #ddd;
  border-left: 3px solid #5457ff;
  padding: 10px;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;


type BoardItemType = {
  board: Board;
}

function BoardItem({ board }: BoardItemType) {
  return (
    <BoardItemContainer>
      <TitleWrapper>
        <span>#{board.id}</span>
        <h5><a href="/board/detail">{board.title}</a></h5>
        <div>
          {board.category.map(category => (
            <Badge category={category}/>
          ))}
        </div>
      </TitleWrapper>
      <AvatarContainer>
        <div className="id-date-container">
          <IdDateComponent user={board.user} imgBool={false} />
        </div>
        <BoardState view={board.view} comment={board.comment} like={board.like} />
      </AvatarContainer>
    </BoardItemContainer>
  )
}

export default BoardItem;
