import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

function LoginBtn() {
  return(
    <ContentBox>
      <h1>Welcome Back</h1>
      <Button variant="light" block className="btn-google">Login with Google</Button>
      <Button variant="success" block className="btn-naver">Login with Naver</Button>
      <Button variant="warning" block className="btn-kakao">Login with Kakao</Button>
      <Button variant="primary" block className="btn-facebook">Login with Facebook</Button>
    </ContentBox>
  );
}

export default LoginBtn;

const ContentBox = styled.div`

`
