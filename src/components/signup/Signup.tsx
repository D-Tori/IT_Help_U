import React from 'react';
import LoginRpage from '../login/Right-page';
import SignupLpage from './Left-page';


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