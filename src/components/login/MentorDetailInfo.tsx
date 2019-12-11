import React from 'react';
import styled from 'styled-components';

function MentorDetailInfo(){
  return(
    <Detail>
      <div className="divider" />
      <div className="blockTitle">멘토 소개</div>
      <div className="block">
        <p>안녕하세요 멘티님들 *^-^*</p>
        <p>품으며, 아니한 지혜는 하는 실로 피에 원질이 것이다. 가는 굳세게 것은 봄바람을 이상의 풍부하게 방황하여도, 같지 일월과 것이다. 우리의 같지 장식하는 들어 가는 있는 그리하였는가? 유소년에게서 것은 밝은 아니다. 밥을 소금이라 속에 있는 쓸쓸한 있는가? 그와 대고, 인간이 보라. 앞이 바로 끓는 이상, 생명을 그들의 보이는 없으면, 풀밭에 것이다. 인생을 인간의 오직 거선의 이것이다. 귀는 못하다 천지는 청춘의 힘차게 설산에서 있으랴? 같은 꽃이 불러 같이, 칼이다.
          못할 용감하고 같은 것은 그들의 같으며, 시들어 청춘이 살았으며, 이것이다. 지혜는 과실이 청춘을 열매를 피부가 것이다.보라, 피고 끝까지 것이다. 이상이 심장의 이상, 장식하는 든 이것이다. 찾아 놀이 소리다.이것은 그와 이것이다. 몸이 눈이 따뜻한 설산에서 천고에 사막이다. 살 이상의 청춘 우리 되는 꾸며 불어 유소년에게서 우리 봄바람이다. 살았으며, 소담스러운 사는가 품고 가치를 끓는 인도하겠다는 쓸쓸한 봄바람이다. 되려니와, 있는 무한한 봄바람을 때문이다. 방지하는 뼈 청춘 사라지지 가치를 우리 것이다.
          길지 위하여, 현저하게 구하지 뼈 행복스럽고 보배를 이것은 약동하다. 사람은 끓는 영원히 사랑의 부패를 것은 부패뿐이다. 그것을 별과 피가 이상의 커다란 그들은 두손을 피는 뜨고, 봄바람이다. 인생의 이상을 이것을 물방아 실로 가치를 청춘에서만 운다. 공자는 따뜻한 이상의 운다. 이상은 하여도 이상 내려온 설레는 역사를 사랑의 약동하다. 같이, 목숨이 고행을 인간의 것이다. 없으면 곳이 무엇이 듣기만 이상의 어디 우는 군영과 있으랴? 행복스럽고 있음으로써 인류의 피에 그들에게 끓는다. 두기 영락과 목숨이 얼마나 인간의 끓는다. 같이, 살았으며, 그것은 얼마나 사랑의 그리하였는가?</p>
        <p>행복하세요 멘티님들 *^-^*</p>
      </div>
      <div className="blockTitle">주요 경력</div>
      <div className="block">
        <p>니한 지혜는 하는 실로 피에 원질이 것이다. 가는 굳세게 것은 봄바람을 이상의 풍부하게 방황하여도,</p>
      </div>
      <div className="blockTitle">기타 사항</div>
      <div className="block">
        <p>안녕하세요 감사합니다 행복하세요</p>
      </div>
    </Detail>
  );
}

export default MentorDetailInfo;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 35px 0;
  word-break: break-all;

  .divider {
    display: flex;
    content: '';
    background-color: #c8c7cc;
    height: 1px;
    width: 100%;
  }
  
  .blockTitle {
    display: flex;
    font-weight: bold;
    font-size: 1.1rem;
    text-transform: uppercase;
    line-height: 1;
    margin: 35px 15px 10px;
  }

  .block {
    display: flex;
    flex-direction: column;
    font-size: 14.5px;
    line-height: 1.6;
    padding: 0 15px;
  }
`