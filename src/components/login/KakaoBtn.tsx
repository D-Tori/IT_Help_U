import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type BtnType = {
  type: string
}

function KakaoBtn({type} : BtnType){
  const value = type;

  return(
    <ContentBox>
      {
        (function() {
          if (value === "login") return (<Button variant="warning">Login with Kakao</Button>);
          if (value === "signup") return (<Button variant="warning">Sign up with Kakao</Button>);
        })()
      }
    </ContentBox>
  );
}

export default KakaoBtn;

const ContentBox = styled.div`

`
