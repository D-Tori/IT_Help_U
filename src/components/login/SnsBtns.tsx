import React from 'react';
import styled from 'styled-components';
import GoogleBtn from './GoogleBtn';
import NaverBtn from './NaverBtn';
import KakaoBtn from './KakaoBtn';
import FaceBookBtn from './FaceBookBtn';

// typescirpt를 사용하고 있기 때문에 타입을 명시적으로 선언해야 한다.
type SnsBtnsType = {
  contentTitle: string,
  type: string   // ? 를 쓰면 undefined
}


function SnsBtns({ contentTitle, type } : SnsBtnsType) {

  return(
    <ContentBox>
      <h1>{ contentTitle }</h1>
      <div className= "btn-container">
        <GoogleBtn type={type} />
        <NaverBtn type={type} />
        <KakaoBtn type={type} />
        <FaceBookBtn type={type} />
      </div>
    </ContentBox>
  );
}

export default SnsBtns;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  .btn-container {
    margin-top: 10px;
  }

  .btn {
    margin: 1px 0;
    width: 100%;
  }
`
