import React from 'react';
import styled from 'styled-components';
import logo from '../../images/full-logo.svg'
import { Link } from 'react-router-dom';

function LoginLogo(){
  return (
    <ContentBox>
      <div className="logo-container">
        <Link to='/'>
          <img src= {logo} alt="임시로고"/>
        </Link>
      </div>
    </ContentBox>
  );
}

export default LoginLogo;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
