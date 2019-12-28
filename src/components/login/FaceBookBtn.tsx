import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import icon from '../../images/facebook_logo.png';

type BtnType = {
  type: string
}

function FaceBookBtn({type} : BtnType){
  const value: string = type;

  const output = (() => {
    if (value === "login")
     return (
      <Button variant="outline-dark"><img src= {icon} className="icon" alt="페이스북 로고" /> Login with Facebook</Button>);

    if (value === "signup")
     return (
      <Button variant="outline-dark"><img src= {icon} className="icon" alt="페이스북 로고" /> Sign up with Facebook</Button>);
    })()

  return(
    <ContentBox>
      {output}
    </ContentBox>
  );
}

export default FaceBookBtn;

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
