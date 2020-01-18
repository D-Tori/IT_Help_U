import React from 'react';
import styled from 'styled-components';
import MentorInfo from './MentorInfo';
import MentorDetailInfo from './MentorDetailInfo';
import MentorThanks from './MentorThanks';


function MentorContainer(){
  return(
    <ContentBox>
      <MentorInfo />
      <MentorDetailInfo />
      <MentorThanks />
    </ContentBox>
  );
}



export default MentorContainer;

const ContentBox = styled.div`
  display:flex;
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
