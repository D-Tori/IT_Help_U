import React from 'react';
import BoardDetailContent from './BoardDetailContent';
import IdDateComponent from '../../common/IdDateComponent';
import styled from 'styled-components';
import MenuTitle from '../../common/MenuTitle';
import Header from '../../common/Header';
import BoardComment from './BoardComment';
import Footer from '../../common/Footer';

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
      padding: 15px;
    }
  }

  @media (min-width: 360px) {
    width: 100%;
    padding: 15px;
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
      <MenuTitle condition="board"/>
      <BoardContainer>
        <div className="detail-header">
          <IdDateComponent user={'이름'} imgBool={true}/>
          {/* <BoardState /> */}
        </div>
        <BoardDetailContent />
      </BoardContainer>
      <MenuTitle condition="comments"/>
      <BoardComment />
    </BoardDetailStyle>
    <Footer />
    </>
  )
}

export default BoardDetailPage;
