import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type BtnType = {
  type: string
}

function KakaoBtn(){
  return(
    <ContentBox>
      <Button></Button>
    </ContentBox>
  );
}

export default KakaoBtn;

const ContentBox = styled.div`

`
