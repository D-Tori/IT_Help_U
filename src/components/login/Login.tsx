import React from 'react';
import LoginLpage from './Left-page';
import LoginRpage from './Right-page';
import './css/login.css'


function Login() {
  return(
    <div className="container-fluid">
      <div className="row full-height">
        <LoginLpage/>
        <LoginRpage/>
      </div>
    </div>
  );
}

export default Login;