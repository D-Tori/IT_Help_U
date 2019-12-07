import React from 'react';
import LoginLeft from './LoginLeft';
import LoginRight from './LoginRight';



function LoginPage() {
  return(
    <div className="container-fluid">
      <div className="row full-height">
        <LoginLeft/>
        <LoginRight/>
      </div>
    </div>
  );
}

export default LoginPage;