import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import icon from '../../images/naver_logo.png';

type BtnType = {
  type: string
}

function NaverBtn({type} : BtnType){
  const value: string = type;

  const output = (() => {
    if (value === "login")
     return (
      <Button variant="outline-dark"><img src= {icon} className="icon" alt="네이버 로고" /> Login with Naver</Button>);

    if (value === "signup")
     return (
      <Button variant="outline-dark"><img src= {icon} className="icon" alt="네이버 로고" /> Sign up with Naver</Button>);
    })()

  return(
    <ContentBox>
      {output}
    </ContentBox>
  );
}

export default NaverBtn;

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
