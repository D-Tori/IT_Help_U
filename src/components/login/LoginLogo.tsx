import React from 'react';
import styled from 'styled-components';
import logo from './images/full-logo.svg'
import { Link } from 'react-router-dom';

function LoginLogo(){
  return (
    <Logo>
      <Link to='/'>
        <img src= {logo} className="logo" alt="임시로고"/>
      </Link>
    </Logo>
  );
}  

export default LoginLogo;

const Logo = styled.div`
  img.logo {
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -90px;
    max-width: 45%;
  }
`