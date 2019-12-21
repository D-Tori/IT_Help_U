import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginLogo from './LoginLogo';
import LoginBtn from './LoginBtn';
import LoginForm from './LoginForm';

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
  width: 500px;
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
