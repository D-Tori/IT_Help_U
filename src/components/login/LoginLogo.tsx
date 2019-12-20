import React from 'react';
import styled from 'styled-components';
import logo from '../../images/full-logo.svg'
import { Link } from 'react-router-dom';

function LoginLogo(){
  return (
    <Logo>
      <div className="logo-container">
        <Link to='/'>
          <img src= {logo} alt="임시로고"/>
        </Link>
      </div>
    </Logo>
  );
}

export default LoginLogo;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`
