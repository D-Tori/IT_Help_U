import React from 'react';
import LoginRight from '../../login/LoginRight';
import ResetPwLeft from './ResetPwLeft';
import Header from '../../Header';
import Footer from '../../Footer';
import styled from 'styled-components';

function ResetPwPage(){
  return(
    <>
      <Header />
      <PageStyled>
        <ResetPwLeft />
        <LoginRight/>
      </PageStyled>
      <Footer />
    </>
  );
}

export default ResetPwPage;

const PageStyled = styled.div`
  display: flex;

`
