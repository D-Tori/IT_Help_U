import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../login/images/full-logo.svg'
import './css/left-page.css'
import { Link } from 'react-router-dom';

function SignUpLpage(){
  return (
    <div className="col col-12 col-md-6 left ds-vertical-align">
      <img src= {logo} className="logo" alt="임시로고"/>
      <div className="inner">
        <h1>Welcome</h1>
        <Button variant="light" block className="btn-google">Sign up with Google</Button>
        <Button variant="success" block className="btn-naver">Sign up with Naver</Button>
        <Button variant="warning" block className="btn-kakao">Sign up with Kakao</Button>
        <Button variant="primary" block className="btn-facebook">Sign up with Facebook</Button>
        <div className="divider">
          <span>이메일로 회원 가입하기</span>
        </div>
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


        <div className="divider" />
        <p className="account">
          "계정이 있으신가요?"
          <Link to="/login">로그인 하기</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpLpage;