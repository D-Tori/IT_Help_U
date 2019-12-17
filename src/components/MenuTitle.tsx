import React from 'react';

import styled from 'styled-components';


const StyleMenu = styled.div`


  display: flex;
  margin-bottom: 20px;
  margin-top: 81px;
  justify-content: space-between;

  h1 {
    display: flex;
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    color: #000;
  }
  button {
    display: flex;

  }
`;



function MenuTitle() {
  return (

      <StyleMenu>
        <h1>
          프로젝트 둘러보기
        </h1>
        <button>안녕</button>
      </StyleMenu>


  )
}

export default MenuTitle;
