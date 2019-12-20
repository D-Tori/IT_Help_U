import React from 'react';
import BoardForm from './BoardForm';
import MenuTitle from '../../common/MenuTitle';
import styled from 'styled-components';
import Header from '../../common/Header';
import Footer from '../../common/Footer';


const Style = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function BoardWritePage() {
  return (
    <>
    <Header />
    <Style>
    <MenuTitle condition="boardWrite"/>
    <BoardForm />
    </Style>
    <Footer />
    </>
  )
}

export default BoardWritePage;
