import React from 'react';
import styled from 'styled-components';

const CommentInputBox = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  line-height: 1.5;
  padding: 10px;
  margin: 10px 0;
`;

const CommentContainer = styled.div`
  background-color: #dedede;
  width: 100%;
  height: 100%;
  padding: 15px;

`;

const CommentSubmitBtn = styled.button`

  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: #963484;
  border: none;
  color: #eee;
  border-radius: 4px;
`;

function CommentInput() {
  return (
    <CommentContainer>
      <h4>댓글 쓰기</h4>
      <CommentInputBox />
      <CommentSubmitBtn>작성완료</CommentSubmitBtn>
    </CommentContainer>

  )
};

export default CommentInput;
