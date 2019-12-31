import React from 'react';
import LoginRight from '../login/LoginRight';
import NewMentorLeft from './NewMentorLeft';
import styled from 'styled-components';
import img from '../../images/Login-Illustration-1.svg';

function NewMentor() {
  return(
    <PageStyled>
      <div className="left-page">
        <NewMentorLeft/>
      </div>
      <div className="right-page">
        <LoginRight/>
      </div>
    </PageStyled>
  );
}


export default NewMentor;

const PageStyled = styled.div`
display: flex;
margin-top: 57px;

.left-page {
  display: flex;
  width: 50%

  @media (max-width: 767px){
    width: 100%;
  }
}

.right-page {
  display: flex;
  width: 50%
  background: url(${img}) no-repeat left bottom #E9EEFA;
  background-size: cover;

  @media (max-width: 767px){
    display: none;
  }
}
`
