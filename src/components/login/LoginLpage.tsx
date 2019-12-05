import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from './images/full-logo.svg'
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// col-종류-숫자 형태로 작성
// 종류	   크기	           주로 해당되는 디바이스
// lg	     1200px 이상	   PC, 태블릿
// md	     992 ~ 1200px	   태블릿
// sm	     768 ~ 992px	   태블릿
// xs	     768px 미만	     스마트 폰

// "숫자"는 그 내용이 row에 차지하는 비중이다. row는 폭 전체를 "12"의 블록으로 나누어 관리한다.

function LoginLpage(){
  return (
    <div className="col col-12 col-md-6 left ds-vertical-align">  
      <img src= {logo} className="logo" alt="임시로고"/>
      <Inner>
        <h1>Welcome Back</h1>
        <Button variant="light" block className="btn-google">Login with Google</Button>
        <Button variant="success" block className="btn-naver">Login with Naver</Button>  
        <Button variant="warning" block className="btn-kakao">Login with Kakao</Button>
        <Button variant="primary" block className="btn-facebook">Login with Facebook</Button>
        <Divider>
          <span>이메일로 로그인하기</span>
        </Divider>
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
          <div className="row">
            <div className="col col-12 col-lg6">
              <div className="form-group">
                <a href="#">비밀번호를 잊어버리셨나요?</a>
              </div>
            </div>
          </div>
          <Button variant="primary" type="submit" className="btn btn-block">
            로그인
          </Button>
        </Form>

        <Divider />
        <p className="no-account">
          "계정이 없으신가요?"
          <Link to='/signUp'>회원 가입하기</Link>
        </p>
      </Inner>
    </div>
    
  );
}

export default LoginLpage;

// const Leftpage = styled.div`
//   position: relative;  
  
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   -ms-flex-preferred-size: 0;
//   flex-basis: 0;
//   -ms-flex-positive: 1;
//   flex-grow: 1;
//   max-width: 100%;

//   width: 100%;
//   min-height: 1px;
//   padding-right: 15px;
//   padding-left: 15px;

//   img.logo {
//     position: absolute;
//     top: 50px;
//     left: 50%;
//     margin-left: -90px;
//     max-width: 45%;
//   }

//   .no-account {
//     padding: 20px 0;
//   }
// `




const Inner = styled.div`
  padding: 150px 50px 50px;   // 위, 왼오, 아래
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  
`
const Divider = styled.div`
  position: relative;
  font-size: 11px;
  color: #B9BBC7;
  margin: 30px 0;

  span {
    position: relative;
    z-index: 1;
    background: #fff;
    padding: 0 5px;
    letter-spacing: 2px;
  }

  :after {
    content: '';
    height: 1px;
    width: 100%;
    background: #efefef;
    position: absolute;
    top: 50%;
    left: 0;
  }
`