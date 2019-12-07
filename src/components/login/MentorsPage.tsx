import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import MentorList from './MentorList';
import MentorField from './MentorField';

function MentorsPage(){
  return(
    <>
      <Header />
      <PageContent>
        <MentorField />
        <MentorList />
      </PageContent>
    </>
  );
} 

export default MentorsPage;

const PageContent = styled.div`
  overflow: auto;
  box-sizing: border-box;
  height: 100%;
  position: relative;

  @media(min-width:1025px){
    width: 1200px;
  }
  
  margin: 0 auto;
`