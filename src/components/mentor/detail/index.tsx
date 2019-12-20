import React from 'react';
import styled from 'styled-components';
import Header from '../../Header';
import Footer from '../../Footer';
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
