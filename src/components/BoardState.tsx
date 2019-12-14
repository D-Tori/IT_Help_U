import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

import comment from '../images/comment (2).svg';
import like from '../images/like.svg';
import view from '../images/view.svg';

const ItemState = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  height: 24px
  .board-icon {
    width: 24px;
    height: 24px;
  }
  span {
    
  }
  @media(max-width:767px) {
    margin-top: 10px;
  }
`;

function BoardState() {
  return(
      <ItemState>
          <Image className="board-icon" src={comment} />
          <span>5</span>
          <Image className="board-icon" src={like} />
          <span>20000</span>
          <Image className="board-icon" src={view} />
          <span>500</span>
        </ItemState>
  )
}

export default BoardState;