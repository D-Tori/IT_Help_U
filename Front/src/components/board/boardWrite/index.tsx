import React from 'react';
import BoardForm from './BoardForm';
import MenuTitle from '../../common/MenuTitle';
import styled from 'styled-components';


const Style = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function BoardWritePage() {
  return (
    <Style>
      <MenuTitle menuTitle="새글 쓰기" backBtnName="목록보기" />
      <BoardForm />
    </Style>
  )
}

export default BoardWritePage;
