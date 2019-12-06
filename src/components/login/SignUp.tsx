import React from 'react';
import LoginRpage from './LoginRpage';
import SignupLpage from './SignUpLpage';


function Signup() {
  return(
    <div className="container-fluid">
      <div className="row full-height">
        <SignupLpage/>
        <LoginRpage/>
      </div>
    </div>
  );
}


export default Signup;