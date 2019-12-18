import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

import commentImage from '../images/comment (2).svg';
import likeImage from '../images/like.svg';
import viewImage from '../images/view.svg';
import { Board } from '../modules/boards';

const ItemState = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  height: 24px;
  width: 100%;
  .board-icon {
    width: 24px;
    height: 24px;

  }
  // span {
  //   margin-left: 5px;
  // }
  @media(max-width:767px) {
    margin-top: 10px;
  }
`;

type BoardStateType = {
  view: number,
  comment: number,
  like: number
}

function BoardState({view, comment, like}: BoardStateType) {
  return(
      <ItemState>
          <Image className="board-icon" src={commentImage} />
          <span>{comment}</span>
          <Image className="board-icon" src={likeImage} />
          <span>{like}</span>
          <Image className="board-icon" src={viewImage} />
          <span>{view}</span>
        </ItemState>
  )
}

export default BoardState;
