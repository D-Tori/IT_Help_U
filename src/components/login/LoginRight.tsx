import React from 'react';
import styled from 'styled-components';
import icon from '../../images/icon-star.svg';

function LoginRight(){
  return(
    <ContentBox>
      <div className="logo">
          <h3><img src= {icon} className="icon" alt="임시아이콘" />IT_Help_U</h3>
      </div>
      <div className="text">
          <p> IT_Help_U 는 It 취준생을 위해 개발되었습니다 <br/> 이곳에서 함께 준비하세요! </p>
      </div>
    </ContentBox>
  );
}

export default LoginRight;


const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 100%;
  text-align: right;

  .logo {
    h3 {
      letter-spacing: 0rem;
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 15px;
      font-weight: 700;
      color: #171933;
    }
  }


  .text {
    p {
      color: #758294;
      margin-top: 0;
      margin-bottom: 1rem;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }


`
