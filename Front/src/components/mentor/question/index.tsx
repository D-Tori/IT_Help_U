import React from 'react';
import styled from 'styled-components';
import MentorInfo from '../detail/MentorInfo';
import QuestionForm from './QuestionForm';

function QuestionPage() {
  return(
    <>
      <ContentContainer>
        <MentorInfo />
        <QuestionForm />
      </ContentContainer>
    </>
  );
}

export default QuestionPage;

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
