import React from 'react';
import LoginLeft from './LoginLeft';
import LoginRight from './LoginRight';
import Header from '../common/Header';
import Footer from '../common/Footer';
import styled from 'styled-components';

function LoginPage() {
  return(
    <>
      <Header />
      <PageStyled>
        <div className="left-page">
          <LoginLeft/>
        </div>
        <div className="right-page">
          <LoginRight/>
        </div>
      </PageStyled>
      <Footer />
    </>
  );
}

export default LoginPage;

const PageStyled = styled.div`
  display: flex;
  margin-top: 57px;

  .left-page {
    width: 50%
  }

  .right-page {
    width: 50%
  }
`
