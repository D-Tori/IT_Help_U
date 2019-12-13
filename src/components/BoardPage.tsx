import React from 'react';
import styled from 'styled-components';
import BoardList from './BoardList';
import MenuTitle from './MenuTitle';
import Footer from './Footer';
import Header from './Header';


const PageViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 0 auto;

  @media (min-width: 360px) {
    width: 100%
  }

  @media (min-width: 1024px) {
    width: 800px;
  }

  
`;

function BoardPage() {
  return (
    <>
      <Header />
      <PageViewContainer>
        <MenuTitle />
        <BoardList />
      </PageViewContainer>
      <Footer />
    </>
  )
}

export default BoardPage;