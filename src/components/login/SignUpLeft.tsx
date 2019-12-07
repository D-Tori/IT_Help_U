import React from 'react';
import styled from 'styled-components';
import LoginLogo from './LoginLogo';
import SignUpForm from './SignUpForm';
import SignUpBtn from './SignUpBtn';
import { Link } from 'react-router-dom';

function SignUpLeft(){
  return (
    <div className="col col-12 col-md-6 left ds-vertical-align">
      <LoginLogo />
      <Inner>
        <SignUpBtn />
        <Divider>
          <span>이메일로 회원 가입하기</span>
        </Divider>
        <SignUpForm />
        <Divider />
        <p className="account">
          "계정이 있으신가요?"
          <Link to="/login">로그인 하기</Link>
        </p>
      </Inner>
    </div>
  );
}

export default SignUpLeft;

const Inner = styled.div`
  padding: 150px 50px 50px;   // 위, 왼오, 아래
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  form {
    text-align: left;
  }

  .account {
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