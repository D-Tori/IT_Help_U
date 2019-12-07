import React from 'react';
import LoginRight from './LoginRight';
import ResetPwLeft from './ResetPwLeft';

function ResetPwPage(){
  return(
    <div className="container-fluid">
      <div className="row full-height">
        <ResetPwLeft />>
        <LoginRight/>
      </div>
    </div>
  );
}

export default ResetPwPage;