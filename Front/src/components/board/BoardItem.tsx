import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import IdDateComponent from '../common/IdDateComponent';

import BoardState from './BoardState';
import { Board } from '../../modules/boards';
import { useRouteMatch, Link } from 'react-router-dom';


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
    width: 100%;
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
  board: Board,
  key: number
}

function BoardItem({ board }: BoardItemType) {
  let { url } = useRouteMatch();
  console.log(url);
  return (
    <BoardItemContainer>
      <TitleWrapper>
        <span>#{board.id}</span>
        <Link key={board.id} to={`${url}/${board.id}`}><h5>{board.title}</h5></Link>
        {/* <div>
          {board.category.map(category => (
            <Badge category={category}/>
          ))}
        </div> */}
      </TitleWrapper>
      <AvatarContainer>
        <div className="id-date-container">
          <IdDateComponent user={board.user} imgBool={false} />
        </div>
        <BoardState view={board.views} comment={board.comments.length} like={board.likes} />
      </AvatarContainer>
    </BoardItemContainer>
  )
}

export default BoardItem;
