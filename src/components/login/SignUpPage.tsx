import React from 'react';
import LoginRight from './LoginRight';
import SignupLeft from './SignUpLeft';


function SignUpPage() {
  return(
    <div className="container-fluid">
      <div className="row full-height">
        <SignupLeft/>
        <LoginRight/>
      </div>
    </div>
  );
}


export default SignUpPage;