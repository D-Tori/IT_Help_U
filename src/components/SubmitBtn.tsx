import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0;

  .btn {
    background: #5457ff;
    color: #fff;
    width: 200px;
    height: 60px;
    line-height: 45px;
    font-size: 20px;
    font-weight: 800;
  }
  .btn:hover {
    background-color: #4a47d5;
  }

  @media (max-width: 767px) {
    margin: 20px 0;
    .btn {
      font-size: 16px;
      width: 150px;
      height: 45px;
      line-height: 30px;
    }
  }
`;


function SubmitBtn () {
  return(
    <BtnContainer>
      <a className="btn" href="#">제출하기</a>
    </BtnContainer>
  )
}

export default SubmitBtn;