import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import MentorList from './MentorList';
import MentorField from './MentorField';

function Mentors(){
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

export default Mentors;

const PageContent = styled.div`
  padding-top: 44px;
  overflow: auto;
  box-sizing: border-box;
  height: 100%;
  position: relative;
`