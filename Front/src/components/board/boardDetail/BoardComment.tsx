import React from 'react';
import styled from 'styled-components';
import BoardCommentItem from './BoardCommentItem';
import CommentInput from './CommentInput';


const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;


  .comment-input {
    margin-bottom: 20px;
    min-height: 150px;
  }
`;

const CommentHeader = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 10px;

  h3 {
    font-size: 16px
    font-weight: 5000;
    line-height: 1.1;
    margin: 0;

  }


`;

type BoardPropsType = {
  isAdd: boolean
}

function BoardComment ({ isAdd }: BoardPropsType) {
  return (
    <CommentContainer>
      {isAdd ? <div className="comment-input"><CommentInput /></div> : <></>}
      <CommentHeader>
        <h3>댓글 3</h3>
      </CommentHeader>
      <BoardCommentItem />
      <BoardCommentItem />
      <BoardCommentItem />
    </CommentContainer>
  )
}


export default BoardComment;
