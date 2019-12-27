import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type BtnType = {
  type: string
}

function GoogleBtn({type} : BtnType){
  return(
    <ContentBox>
      <Button></Button>
    </ContentBox>
  );
}

export default GoogleBtn;

const ContentBox = styled.div`

`
