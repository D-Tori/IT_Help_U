import React from 'react';
import styled from 'styled-components';
import LoginLogo from '../../login/LoginLogo';
import ResetPwForm from './ResetPwForm';
import { Link } from 'react-router-dom';

function ResetPwLeft() {
  return(
    <div className="col col-12 col-md-6 left ds-vertical-align">
      <LoginLogo />
      <Inner>
        <h1>비밀번호 초기화</h1>
        <Divider>
          <span>확인 메일 보내기</span>
        </Divider>
        <ResetPwForm />
        <Divider />
        <p className="no-account">
          <Link to='/login'> 로그인하러 가기</Link>
        </p>
      </Inner>
    </div>
  );
}

export default ResetPwLeft;

const Inner = styled.div`
  padding: 150px 50px 50px;   // 위, 왼오, 아래
  width: 100%;
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
