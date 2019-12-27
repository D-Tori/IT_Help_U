import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type BtnType = {
  type: string
}

function NaverBtn(){
  return(
    <ContentBox>
      <Button></Button>
    </ContentBox>
  );
}

export default NaverBtn;

const ContentBox = styled.div`

`
