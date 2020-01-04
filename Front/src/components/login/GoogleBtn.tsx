import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import icon from '../../images/google_logo.png';

type BtnType = {
  type: string
}

function GoogleBtn({type} : BtnType){
  const value: string = type;

  // 즉시 실행 함수
  const output = (() => {
    if (value === "login")
     return (
      <Button variant="outline-dark"><img src= {icon} className="icon" alt="구글 로고" /> Login with Google</Button>);

    if (value === "signup")
     return (
      <Button variant="outline-dark"><img src= {icon} className="icon" alt="구글 로고" /> Sign up with Google</Button>);
    })()

  return(
    <ContentBox>
      {output}
    </ContentBox>
  );
}

export default GoogleBtn;

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
