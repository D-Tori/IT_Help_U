import React from 'react';
import styled from 'styled-components';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import MentorContainer from './MentorContainer';

function MentorDetailPage(){
  return(
    <>
      <Header />
      <PageStyled>
        <MentorContainer />
      </PageStyled>
      <Footer />
    </>
  );
}

export default MentorDetailPage;

const PageStyled = styled.div`
  display: flex;

`
