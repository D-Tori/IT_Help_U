import React from 'react';
import styled from 'styled-components';
import LikeContainer from './LikeContainer';


const ContentWrap = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: row;

  p {
    font-size: 16px;
    margin: 0;
  }

  @media (max-width: 767px) {
  }

  .content {
    padding: 20px;
    @media (max-width: 767px) {
      padding: 10px;
    }
  
  }

`;





function BoardDetailContent () {
  return (
    <ContentWrap>
      <div className="content">
      <p>align-items 속성은 플렉스 요소의 수직 방향 정렬 방식을 설정합니다. 이 속성은 한 줄만을 가지는 플렉스 박스에서는 효과가 없으며, 두 줄 이상을 가지는 플렉스 박스에서만 효과가 있습니다.
        이 속성은 다음과 같은 속성값을 가질 수 있습니다.
        1. stretch : 기본 설정으로, 플렉스 요소의 높이가 플렉스 컨테이너의 높이와 같게 변경된 뒤 연이어 배치됩니다.
        2. flex-start : 플렉스 요소는 플렉스 컨테이너의 위쪽에 배치됩니다.
        3. flex-end : 플렉스 요소는 플렉스 컨테이너의 아래쪽에 배치됩니다.
        4. center : 플렉스 요소는 플렉스 컨테이너의 가운데에 배치됩니다.
        5. baseline : 플렉스 요소는 플렉스 컨테이너의 기준선(baseline)에 배치됩니다
        다음 예제는 align-items 속성의 flex-start, center와 flex-end 속성값을 이용한 예제입니다.
      </p>
      </div>
      <LikeContainer />
    </ContentWrap>
  )
}

export default BoardDetailContent;