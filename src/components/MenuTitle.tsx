import React from 'react';

import styled from 'styled-components';


const StyleMenu = styled.div`

  
  display: flex;
  margin-bottom: 20px;
  margin-top: 81px;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #000;
  }
`



function MenuTitle() {
  return (

      <StyleMenu>
        <h1>
          프로젝트 둘러보기
        </h1>
      </StyleMenu>


  )
}

export default MenuTitle;