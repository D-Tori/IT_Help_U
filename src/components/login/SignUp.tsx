import React from 'react';
import LoginRpage from './LoginRpage';
import SignupLpage from './SignUpLpage';


function SignUp() {
  return(
    <div className="container-fluid">
      <div className="row full-height">
        <SignupLpage/>
        <LoginRpage/>
      </div>
    </div>
  );
}


export default SignUp;