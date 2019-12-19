import React from 'react';
import BoardForm from './BoardForm';
import MenuTitle from './MenuTitle';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';


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
