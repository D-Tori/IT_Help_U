import React from 'react';
import BoardDetailContent from './BoardDetailContent';
import IdDateComponent from './IdDateComponent';
import styled from 'styled-components';
import BoardState from './BoardState';
import MenuTitle from './MenuTitle';
import Header from './Header';
import BoardComment from './BoardComment';
import Footer from './Footer';

const BoardDetailStyle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  margin-bottom: 40px;
  

  .detail-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 20px 20px 20px 20px;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
    }
  }

  @media (min-width: 360px) {
    width: 100%;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    width: 1200px;
  }
  

`;

const BoardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid #ddd;

`;


function BoardDetailPage () {
  return (
    <>
    <Header />
    <BoardDetailStyle>
      <MenuTitle />
      <BoardContainer>
        <div className="detail-header">
          <IdDateComponent imgBool={true}/>
          {/* <BoardState /> */}
        </div>
        <BoardDetailContent />
      </BoardContainer>
      <MenuTitle />
      <BoardComment />
    </BoardDetailStyle>
    <Footer />
    </>
  )
}

export default BoardDetailPage;