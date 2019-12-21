import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginLogo from './LoginLogo';
import LoginBtn from './LoginBtn';
import LoginForm from './LoginForm';

// col-종류-숫자 형태로 작성
// 종류	   크기	           주로 해당되는 디바이스
// lg	     1200px 이상	   PC, 태블릿
// md	     992 ~ 1200px	   태블릿
// sm	     768 ~ 992px	   태블릿
// xs	     768px 미만	     스마트 폰

// "숫자"는 그 내용이 row에 차지하는 비중이다. row는 폭 전체를 "12"의 블록으로 나누어 관리한다.

function LoginLeft(){
  return (
      <ContentBox>
        <LoginLogo />
        <LoginBtn />
        <Divider>
          <span>이메일로 로그인하기</span>
        </Divider>
        <LoginForm />
        <Divider />
        <p className="no-account">
          "계정이 없으신가요?"
          <Link to='/signUp'> 회원 가입하기</Link>
        </p>
      </ContentBox>
  );
}

export default LoginLeft;

const ContentBox = styled.div`
  display:flex;
  flex-direction: column;

  padding: 50px;

  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  form {
    text-align: left;
  }

  .no-account {
    padding: 20px 0;
  }
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
