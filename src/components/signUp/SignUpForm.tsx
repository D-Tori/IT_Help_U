import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUpForm(){
  return(
    <Form id="login-form" method="post">
      <Form.Group controlId="signupName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="name" placeholder="이름을 입력하세요" />
      </Form.Group>
      <Form.Group controlId="signupEmail">
        <Form.Label>이메일 주소</Form.Label>
        <Form.Control type="email" placeholder="이메일 주소를 입력하세요" />
        <Form.Text className="text-muted">
          IT Help U 는 절대 사용자의 이메일을 공유하지 않습니다.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="signupPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="회원 가입을 하면 IT_Help_U의 이용약관 및 개인정보처리방침에 동의하는 것으로 간주합니다."></Form.Check>
      </Form.Group>
      <Button variant="primary" type="submit" className="btn btn-block">
        회원 가입
      </Button>
    </Form>
  );
}

export default SignUpForm;