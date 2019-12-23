import React from 'react';
import styled from 'styled-components';
import ApplyForm from './ApplyForm';
import LoginLogo from '../../login/LoginLogo';
import SnsBtns from '../../login/SnsBtns';

function ApplyLeft() {
  return(
    <ContentBox>
      <LoginLogo />
      <SnsBtns condition="mentorapply"/>
      <ApplyForm />
    </ContentBox>

  );
}

export default ApplyLeft;

const ContentBox = styled.div`
  display:flex;
  flex-direction: column;
  padding: 50px;
  width: 500px;
  margin: 0 auto;
  text-align: center;
  min-height: 600px;

  form {
    text-align: left;
  }

`
