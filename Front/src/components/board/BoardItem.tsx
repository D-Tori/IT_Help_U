import React from 'react';
import styled from 'styled-components';
import IdDateComponent from '../common/IdDateComponent';

import BoardState from './BoardState';
import { Board } from '../../modules/boards';
import { useRouteMatch, Link } from 'react-router-dom';
import Badge from './Badge';


const TitleWrapper = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;

  h5 a {
    text-decoration: none;
    color: ${props => props.theme.colors.headFontColor};
    &:hover {
      color: ${props => props.theme.colors.pointColor}
    }
  }

  span {
    color: ${props => props.theme.colors.descFontColor};
  }

  .avatar-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  @media (max-width: 767px) {

  }

`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .id-date-container {
    display: flex;
    width: 100%;
  }

  .board-state-content {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 5px;
  }

  @media (max-width: 767px) {
    flex-direction: row;
    width: 100%;
  }
`

const BoardItemContainer = styled.li`
  display: flex;
  width: 100%;
  border: 1px solid #ddd;
  border-left: 3px solid ${props => props.theme.colors.pointColor};
  padding: 10px;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;


type BoardItemType = {
  board: Board,
  key: number
}

function BoardItem({ board }: BoardItemType) {
  let { url } = useRouteMatch();

  let numberOfComments = board.comments ? board.comments.length : 0;

  console.log(board);


  return (
    <BoardItemContainer>
      <TitleWrapper>
        <span>#{board.id}</span>
        <h5><Link key={board.id} to={`${url}/${board.id}`}>{board.title}</Link></h5>
        <div style={{marginTop: "10px"}}>
          <Badge tag="하이" />
        </div>
      </TitleWrapper>
      <AvatarContainer>
        <div className="board-state-content">
          <BoardState view={board.view_count} comment={numberOfComments} like={board.like_count} />
        </div>
        <div className="id-date-container">
          <IdDateComponent user={board.writer} imgBool={false} />
        </div>
      </AvatarContainer>
    </BoardItemContainer>
  )
}

export default BoardItem;
