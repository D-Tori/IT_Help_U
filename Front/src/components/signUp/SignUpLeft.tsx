import React from 'react';
import styled from 'styled-components';
import LoginLogo from '../login/LoginLogo';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom';
import SnsBtns from '../login/SnsBtns';

function SignUpLeft(){
  return (
    <ContentBox>
      <LoginLogo />
      <SnsBtns contentTitle="Welcome" type="signup"/>
      <Divider>
        <span>이메일로 회원 가입하기</span>
      </Divider>
      <SignUpForm />
      <Divider />
      <p className="account">
        "계정이 있으신가요?"
        <Link to="/login">로그인 하기</Link>
      </p>
    </ContentBox>
  );
}

export default SignUpLeft;

const ContentBox = styled.div`
  display: ${props => props.theme.leftPage.display};
  flex-direction: ${props => props.theme.leftPage.flexDirection};
  padding: ${props => props.theme.leftPage.padding};
  width: ${props => props.theme.width.formWidth};
  margin: ${props => props.theme.leftPage.margin};
  text-align: ${props => props.theme.leftPage.textAlign};

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
