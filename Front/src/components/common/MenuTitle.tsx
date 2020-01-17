import React from 'react';

import styled from 'styled-components';
import RoutingBtn from './RoutingBtn';
import BackBtn from './BackBtn';
import ToggleBtn from './ToggleBtn';
import AddBtn from './AddBtn';


const StyleMenu = styled.div`


  display: flex;
  margin-bottom: 20px;
  margin-top: 81px;
  justify-content: space-between;

  h1 {
    display: flex;
    font-size: ${props => props.theme.fontSize.xLarge}
    color: ${props => props.theme.colors.headFontColor};
    font-weight: ${props => props.theme.fontWeight.mainTitle};

  }
  .btn-container {
    display: flex;
    width: ${props => props.theme.width.halfWidth};
    justify-content: flex-end;
  }

  @media (max-width: 767px) {
    flex-direction: row;
  }
`;

type MenuTitleType = {
  menuTitle: string,
  routingBtnName?: string,
  backBtnName?: string,
  toggleBtnName?: string,
  addBtnName?: string,
  routing?: string,
  onClick?: () => void
}

function MenuTitle({ menuTitle, routingBtnName, backBtnName, toggleBtnName, addBtnName, routing, onClick }: MenuTitleType) {

  let routingBtn = null;
  let backBtn = null;
  let toggleBtn = null;
  let addBtn = null;

  if(routingBtnName !== null && routingBtnName !== undefined) {
    routingBtn = <RoutingBtn btnName={routingBtnName} routing={routing} />
  };
  if(backBtnName !== null && backBtnName !== undefined) {
    backBtn = <BackBtn btnName={backBtnName} />;
  };
  if(toggleBtnName !== null && toggleBtnName !== undefined) {
    toggleBtn = <ToggleBtn routing={routing} btnName={toggleBtnName} />;
  };
  if(addBtnName !== null && addBtnName !== undefined) {
    addBtn = <AddBtn onClickHandler={onClick} btnName={addBtnName} />;
  };

  return (
    <StyleMenu>
      <h1>{menuTitle}</h1>
      <div className="btn-container">
        {routingBtn && routingBtn}
        {backBtn && backBtn}
        {toggleBtn && toggleBtn}
        {addBtn && addBtn}
      </div>
    </StyleMenu>


  )
}

export default MenuTitle;
