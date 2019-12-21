import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

function SignUpBtn(){
  return(
    <Btn>
      <h1>Welcome</h1>
      <Button variant="light" block className="btn-google">Sign up with Google</Button>
      <Button variant="success" block className="btn-naver">Sign up with Naver</Button>
      <Button variant="warning" block className="btn-kakao">Sign up with Kakao</Button>
      <Button variant="primary" block className="btn-facebook">Sign up with Facebook</Button>
    </Btn>
  );
}

export default SignUpBtn;

const Btn = styled.div`

`