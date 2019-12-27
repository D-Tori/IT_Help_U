import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type BtnType = {
  type: string
}

function GoogleBtn({type} : BtnType){
  const value = type;

  return(
    <ContentBox>
      {
        (function() {
          if (value === "login") return (<Button variant="light">Login with Google</Button>);
          if (value === "signup") return (<Button variant="light">Sign up with Google</Button>);
        })()
      }
    </ContentBox>
  );
}

export default GoogleBtn;

const ContentBox = styled.div`

`
