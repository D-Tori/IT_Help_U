import React from 'react';
import LoginLeft from './LoginLeft';
import LoginRight from './LoginRight';
import Header from '../common/Header';
import Footer from '../common/Footer';
import styled from 'styled-components';
import img from '../../images/Login-Illustration-1.svg';

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
