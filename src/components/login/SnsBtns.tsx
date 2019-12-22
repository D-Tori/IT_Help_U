import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import useSnsBtn from '../../hooks/useSnsBtn';

// typescirpt를 사용하고 있기 때문에 타입을 명시적으로 선언해야 한다.
type ConditionType = {
  condition: string
}


function SnsBtns({condition} : ConditionType) {
  const snsbtn= useSnsBtn();
  const selectedCondition = snsbtn.findIndex(snsbtn => snsbtn.condition === condition);

  return(
    <ContentBox>
      <h1>
        {snsbtn[selectedCondition].name}
      </h1>
      {
        snsbtn[selectedCondition].isBtn
        ?
          <>
            <Button className="btn-Google" variant="light"> {snsbtn[selectedCondition].btnGoogle} </Button>
            <Button className="btn-Naver" variant="success"> {snsbtn[selectedCondition].btnNaver} </Button>
            <Button className="btn-Kakao" variant="warning"> {snsbtn[selectedCondition].btnKakao} </Button>
            <Button className="btn-Facebook" variant="primary"> {snsbtn[selectedCondition].btnFacebook} </Button>
          </>
        : <></>
      }
    </ContentBox>
  );
}

export default SnsBtns;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 5px;
  }

  .btn {
    margin: 1px 0;
  }
`
