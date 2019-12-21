import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Footer from '../common/Footer';
import MentorInfo from '../mentor/detail/MentorInfo';
import QuestionItem from './QuestionItem';

function QuestionListPage() {
  return(
    <>
      <Header />
      <ContentContainer>
        <MentorInfo />
        <QuestionItem />
      </ContentContainer>
      <Footer />
    </>
  );
}

export default QuestionListPage

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 800px;
  margin: 0 auto;
  padding-top: 81px


  @media (max-width: 799px){
    width: auto;
    margin: 0 auto;
    padding-top: 81px
  }
`