import React from 'react';
import LoginRight from '../login/LoginRight';
import SignupLeft from './SignUpLeft';
import Header from '../common/Header';
import Footer from '../common/Footer';
import styled from 'styled-components';

function SignUpPage() {
  return(
    <>
      <Header />
      <PageStyled>
        <SignupLeft/>
        <LoginRight/>
      </PageStyled>
      <Footer />
    </>
  );
}


export default SignUpPage;

const PageStyled = styled.div`
  display: flex;

`
