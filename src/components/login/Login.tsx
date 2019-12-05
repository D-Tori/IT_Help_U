import React from 'react';
import LoginLpage from './LoginLpage';
import LoginRpage from './LoginRpage';



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