import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type BtnType = {
  type: string
}

function FaceBookBtn({type} : BtnType){
  const value = type;

  return(
    <ContentBox>
      {
        (function() {
          if (value === "login") return (<Button>Login with Facebook</Button>);
          if (value === "signup") return (<Button>Sign up with Facebook</Button>);
        })()
      }
    </ContentBox>
  );
}

export default FaceBookBtn;

const ContentBox = styled.div`

`
