import React from 'react';

import styled from 'styled-components';
import useMenus from '../hooks/useMenus';
import { Menu } from '../modules/menus';

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
  .none {
    display: none;
  }
`;

type MenuTitleType = {
  condition: string
}



function MenuTitle({condition}: MenuTitleType) {
  const menus = useMenus();
  const selectedCondition = menus.findIndex(menu => menu.condition === condition);
  return (
      <StyleMenu>
        <h1>
          {menus[selectedCondition].name}
        </h1>
        <button className={menus[selectedCondition].isBtn ? "title-btn" : "none"}>{menus[selectedCondition].btnName}</button>
      </StyleMenu>


  )
}

export default MenuTitle;
