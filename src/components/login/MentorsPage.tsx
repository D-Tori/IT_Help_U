import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import MentorList from './MentorList';
import MentorField from './MentorField';
import Footer from '../Footer';

function MentorsPage(){
  return(
    <>
      <Header />
      <PageContent>
        <MentorField />
        <MentorList />
      </PageContent>
      <Footer />
    </>
  );
} 

export default MentorsPage;

const PageContent = styled.div`
  overflow: auto;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  @media (min-width: 1025px){
    width: 1200px;
  }
`