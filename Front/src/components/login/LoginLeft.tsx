import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginLogo from './LoginLogo';
import LoginForm from './LoginForm';
import SnsBtns from './SnsBtns'

function LoginLeft(){
  return (
      <ContentBox>
        <LoginLogo />
        <SnsBtns contentTitle="Welcome Back" type="login"/>
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
  display: ${props => props.theme.leftPage.display};
  flex-direction: ${props => props.theme.leftPage.flexDirection};
  padding: ${props => props.theme.leftPage.padding};
  width: ${props => props.theme.width.formWidth};
  margin: ${props => props.theme.leftPage.margin};
  text-align: ${props => props.theme.leftPage.textAlign};

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
