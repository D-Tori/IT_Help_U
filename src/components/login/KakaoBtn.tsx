import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import icon from '../../images/kakao_logo.png';

type BtnType = {
  type: string
}

function KakaoBtn({type} : BtnType){
  const value: string = type;

  const output = (() => {
    if (value === "login")
     return (
      <Button variant="outline-dark"><img src= {icon} className="icon" alt="카카오 로고" /> Login with Kakao</Button>);

    if (value === "signup")
     return (
      <Button variant="outline-dark"><img src= {icon} className="icon" alt="카카오 로고" /> Sign up with Kakao</Button>);
    })()

  return(
    <ContentBox>
      {output}
    </ContentBox>
  );
}

export default KakaoBtn;

const ContentBox = styled.div`

  .btn {
    border: 1px solid #eee;
  }

  img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`
