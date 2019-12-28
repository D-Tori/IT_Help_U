import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginForm(){
  return(
    <ContentBox>
      <Form id="login-form" method="post">
        <Form.Group controlId="loginEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control type="email" placeholder="이메일 주소를 입력하세요" />
          <Form.Text className="text-muted">
            IT Help U 는 절대 사용자의 이메일을 공유하지 않습니다.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="loginPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
        </Form.Group>
        <Form.Group controlId="loginCheckbox">
          <Form.Check type="checkbox" label="로그인 유지하기"></Form.Check>
        </Form.Group>
        <div className="resetpw-container">
          <Link to='/myPage/resetPw'>비밀번호를 잊어버리셨나요?</Link>
        </div>
        <Button variant="primary" type="submit" className="btn btn-block">
          로그인
        </Button>
      </Form>
    </ContentBox>
  );
}

export default LoginForm;

const ContentBox = styled.div`

  form {
    text-align: left;
  }

  .resetpw-container {
    margin-bottom: 16px;
  }
`
