import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type BtnType = {
  type: string
}

function NaverBtn({type} : BtnType){
  const value = type;

  return(
    <ContentBox>
      {
        (function() {
          if (value === "login") return (<Button variant="success">Login with Naver</Button>);
          if (value === "signup") return (<Button variant="success">Sign up with Naver</Button>);
        })()
      }
    </ContentBox>
  );
}

export default NaverBtn;

const ContentBox = styled.div`

`
