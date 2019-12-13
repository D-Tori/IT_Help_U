import React from 'react';
import styled from 'styled-components';
import Badge from './Badge';
import IdDateComponent from './IdDateComponent';
import Image from 'react-bootstrap/Image';

import comment from '../images/comment (2).svg';
import like from '../images/like.svg';
import view from '../images/view.svg';


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

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const BoardItemContainer = styled.div`
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

const ItemState = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 100%;
  height: 24px
  .board-icon {
    width: 24px;
    height: 24px;
  }
  span {
    
  }
  @media(max-width:767px) {
    margin-top: 5px;
  }
`;

function BoardItem() {
  return (
    <BoardItemContainer>
      <TitleWrapper>
        <span>#1010101</span>
        <h5><a href="#">제목인데 이게 길어진다면 감당이 되겠어??</a></h5>
        <Badge />
      </TitleWrapper>
      <AvatarContainer>
        <IdDateComponent />
        <ItemState>
          <Image className="board-icon" src={comment} />
          <span>5</span>
          <Image className="board-icon" src={like} />
          <span>20000</span>
          <Image className="board-icon" src={view} />
          <span>500</span>
        </ItemState>
      </AvatarContainer>
    </BoardItemContainer>
  )
}

export default BoardItem;