import React from 'react';
import upArrow from '../../../images/upArrow.svg';
import downArrow from '../../../images/downArrow.svg';
import like from '../../../images/like.svg';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const LikeContainerStyle = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #ddd;
  padding: 20px;

  .like-img {
    width: 24px;
    height: 24px;
  }
  .like-container span {
    font-size: 20px;
    font-weight: 400;

  }

  .space {
    margin-top: 10px;
    margin-bottom: 10px;
}
`;

function LikeContainer () {
  return (
    <LikeContainerStyle>
        <input alt="더하기버튼" type="image" src={upArrow} className="like-img space"/>
        <Image className="like-img" src={like} />
        <span>5</span>
        <input alt="빼기버튼" type="image" src={downArrow} className="like-img space"/>
    </LikeContainerStyle>
  )
}

export default LikeContainer;
