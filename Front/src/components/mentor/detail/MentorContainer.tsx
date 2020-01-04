import React from 'react';
import styled from 'styled-components';
import MentorInfo from './MentorInfo';
import MentorDetailInfo from './MentorDetailInfo';
import MentorThanks from './MentorThanks';

function MentorContainer(){
  return(
    <ContainerStyled>
      <MentorInfo />
      <MentorDetailInfo />
      <MentorThanks />
    </ContainerStyled>
  );
}



export default MentorContainer;

const ContainerStyled = styled.div`
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