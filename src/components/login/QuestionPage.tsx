import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import MentorInfo from './MentorInfo';
import QuestionForm from './QuestionForm';

function QuestionPage() {
  return(
    <>
      <Header />
      <ContentContainer>
        <MentorInfo />
        <QuestionForm />
      </ContentContainer>
      <Footer />
    </>
  );
}

export default QuestionPage;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 800px){
    width: 800px;
    margin: 0 auto;
    padding-top: 81px
  }

  @media (max-width: 799px){
    width: auto;
    margin: 0 auto;
    padding-top: 81px
  }  
`
