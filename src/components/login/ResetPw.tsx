import React from 'react';
import LoginRpage from './LoginRpage';
import ResetPwL from './ResetPwL';

function ResetPw(){
  return(
    <div className="container-fluid">
      <div className="row full-height">
        <ResetPwL />>
        <LoginRpage/>
      </div>
    </div>
  );
}

export default ResetPw;