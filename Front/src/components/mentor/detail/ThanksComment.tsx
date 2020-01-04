import React from 'react';
import styled from 'styled-components';
import MenteeImg from '../../../images/mentee1.jpg'
import Image from 'react-bootstrap/Image';

function ThanksComment() {
  return(
    <Comment>
      <div className="menteeInfo">
        <div className="imgContainer">
          <Image className="img" src={MenteeImg} roundedCircle />
        </div>
        <div className="menteeName">경수진</div>
        <div className="sentDate">2019년 11월 11일</div>
      </div>
      <div className="comment">
        감사합니다.
        제가 해왔던 여러가지들을 되돌아보고 정리해 볼 필요가 있을 것 같습니다.
        많은 경험들이 더 필요하겠어요.
        더 많이 생각하고 고민하고 경험해보겠습니다!
      </div>
    </Comment>
  );
}

export default ThanksComment;

const Comment = styled.div`
  margin: 20px 0 44px 0;
  width: 100%;
  padding: 0 15px;

  .menteeInfo {
    margin: 10px 0;
    font-size: 13px;
    line-height: 1.2;
  }

  .imgContainer {
    margin-right: 15px;
    float: left;
  }

  .img {
    width: 35px;
    height: 35px;
  }

  .menteeName {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 4px;
  }

  .sentDate {
    color: #6d6d72;
  }

  .comment {
    line-height: 1.6em;
    font-size: 15px;
  }
`
