import React from 'react';
import styled from 'styled-components';
import LoginLogo from '../../login/LoginLogo';
import ResetPwForm from './ResetPwForm';
import { Link } from 'react-router-dom';

function ResetPwLeft() {
  return(
    <ContentBox>
      <LoginLogo />
      <div>
        <h1>비밀번호 초기화</h1>
      </div>
      <Divider>
        <span>확인 메일 보내기</span>
      </Divider>
      <ResetPwForm />
      <Divider />
      <p className="no-account">
        <Link to='/login'> 로그인하러 가기</Link>
      </p>
    </ContentBox>
  );
}

export default ResetPwLeft;

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
