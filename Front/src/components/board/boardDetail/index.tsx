import React, { useState, useEffect } from 'react';
import BoardDetailContent from './BoardDetailContent';
import IdDateComponent from '../../common/IdDateComponent';
import styled from 'styled-components';
import MenuTitle from '../../common/MenuTitle';
import BoardComment from './BoardComment';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBoardRequest } from '../../../modules/boards';
import useBoards from '../../../hooks/useBoards';

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

  let {id} = useParams();

  let sid: number =  Number(id);

  const dispatch = useDispatch();

  const [isAdd, setIsAdd] = useState(false);

  const onClickHandler = () => {
    if(isAdd === true){
      setIsAdd(false);
    } else if( isAdd === false) {
      setIsAdd(true);
    }
  }

  return (
    <>
    <BoardDetailStyle>
      <MenuTitle menuTitle="고민 내용" backBtnName="목록보기" />
      <BoardContainer>
        <div className="detail-header">
          <IdDateComponent user={id} imgBool={true}/>
          {/* <BoardState /> */}
        </div>
        <BoardDetailContent />
      </BoardContainer>
      <MenuTitle onClick={onClickHandler} menuTitle="댓글" addBtnName="댓글쓰기" />
      <BoardComment isAdd = {isAdd}/>
    </BoardDetailStyle>
    </>
  )
}

export default BoardDetailPage;
