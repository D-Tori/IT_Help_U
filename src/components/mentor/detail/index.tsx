import React from 'react';
import styled from 'styled-components';
import MentorContainer from './MentorContainer';

function MentorDetailPage(){
  return(
    <>
      <PageStyled>
        <MentorContainer />
      </PageStyled>
    </>
  );
}

export default MentorDetailPage;

const PageStyled = styled.div`
  display: flex;

`
