import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type BtnType = {
  type: string
}

function FaceBookBtn(){
  return(
    <ContentBox>
      <Button></Button>
    </ContentBox>
  );
}

export default FaceBookBtn;

const ContentBox = styled.div`

`
