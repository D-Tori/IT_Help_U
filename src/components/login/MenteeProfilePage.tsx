import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import MenteeForm from './MenteeForm';

function MenteeProfilePage(){
  return(
    <>
      <Header />
      <FormContainer>
        <MenteeForm />
      </FormContainer>
      <Footer />
    </>
  );
}

export default MenteeProfilePage;

const FormContainer = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
  @media(max-width: 799px){
    width: auto;
  }  
`