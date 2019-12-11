import React from 'react';
import styled from 'styled-components';
import ThanksComment from './ThanksComment';
import Button from 'react-bootstrap/Button';

function MentorThanks() {
  return(
    <Thanks>
      <div className="divider" />
      <div className="titleWrap">
        <div className="title">고맙습니다 </div>
        <div className="thanksCount"> ( 27 ) </div>
      </div>
      <div className="commentsList">
        <ThanksComment />
        <ThanksComment />
        <ThanksComment />
      </div>
      <div className="btnContainer">
        <Button className="btnMore">더 보기</Button>
      </div>
    </Thanks>
  );
}

export default MentorThanks;

const Thanks = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 35px;

  .divider {
    display: flex;
    content: '';
    background-color: #c8c7cc;
    height: 1px;
    width: 100%;
  }

  .titleWrap{
    display: flex;
    margin-bottom: 15px;
  }

  .title {
    margin: 35px 0 0 15px;
    font-size: 23px;
    line-height: 25px;
    font-weight: bold;
  }

  .thanksCount {
    margin: 35px 0 0 5px;
    font-weight: bold;
    font-size: 18px;
    color: #6d6d72;
  }

  .commentsList{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .btnMore{
    color: #4a47d5;
    background-color: white;
    font-weight: 600;
    display: block;
    width: 120px;
    margin: 0 auto;
  }
`