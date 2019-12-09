import React from 'react';
import styled from 'styled-components';
import MentorInfo from './MentorInfo';

function MentorContainer(){
  return(
    <ContainerStyled>
      <MentorInfo />
      <div>Detail</div>
      <div>Thanks</div>
      <div>Content</div>
    </ContainerStyled>
  );
}



export default MentorContainer;

const ContainerStyled = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 1025px){
    width: 800px;
    margin: 0 auto;
    padding-top: 81px
  }
`