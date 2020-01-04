import React from 'react';
import styled from 'styled-components';
import ApplyForm from './ApplyForm';
import LoginLogo from '../login/LoginLogo';


function NewMentorLeft() {
  return(
    <ContentBox>
      <LoginLogo />
      <h1>멘토 지원하기</h1>
      <ApplyForm />
    </ContentBox>

  );
}

export default NewMentorLeft;

const ContentBox = styled.div`
  display: ${props => props.theme.leftPage.display};
  flex-direction: ${props => props.theme.leftPage.flexDirection};
  padding: ${props => props.theme.leftPage.padding};
  width: ${props => props.theme.width.formWidth};
  margin: ${props => props.theme.leftPage.margin};
  text-align: ${props => props.theme.leftPage.textAlign};


`
