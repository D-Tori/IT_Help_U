import React from 'react';
import LoginRight from '../login/LoginRight';
import SignupLeft from './SignUpLeft';
import styled from 'styled-components';
import img from '../../images/Login-Illustration-1.svg';

function SignUp() {
  return(
    <PageStyled>
      <div className="left-page">
        <SignupLeft/>
      </div>
      <div className="right-page">
        <LoginRight/>
      </div>
    </PageStyled>
  );
}

export default SignUp;

const PageStyled = styled.div`
display: flex;
margin-top: 57px;

.left-page {
  display: flex;
  width: 50%

  @media (max-width: 767px){
    width: 100%;
  }
}

.right-page {
  display: flex;
  width: 50%
  background: url(${img}) no-repeat left bottom #E9EEFA;
  background-size: cover;

  @media (max-width: 767px){
    display: none;
  }
}
`
