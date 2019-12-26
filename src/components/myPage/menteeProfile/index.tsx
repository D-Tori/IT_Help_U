import React from 'react';
import styled from 'styled-components';
import MenteeForm from './MenteeForm';

function MenteeProfilePage(){
  return(
    <>
      <FormContainer>
        <MenteeForm />
      </FormContainer>
    </>
  );
}

export default MenteeProfilePage;

const FormContainer = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  @media(max-width: 799px){
    width: auto;
  }
`
