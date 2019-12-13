import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

import comment from '../images/comment.svg';
import IdDateComponent from './IdDateComponent';

const CommentItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  align-content: center;
  border: 1px solid #eee;
  border-radius: 25px;
  
  margin-bottom: 10px;

  .comment-header {
    width: 100%;
    padding: 20px;
  }


  .comment-content {
    margin-top: 20px; 
    min-height: 100px;
    border-bottom : 1px solid #eee;
    padding: 20px;
    flex-wrap: wrap;
    width: 100%;
  }
  .comment-content span {
    display: flex;
  }

  .comment-img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }
  
  .reply {
    display: flex;
    // border-top: 1px solid #eee;
    padding: 10px 20px;

  }

  .reply span {
    margin-left: 5px;
  }

`;


function ProjectCommentItem() {
  return (
    <CommentItemContainer>
      <div className="comment-header">
        <IdDateComponent />
      </div>
      <div className="comment-content">
        <span>이것이 댓글 내용입니다. 두유 노우 댓? 잇이즈 매우매우 불편데스네 두유노우이누읾우리ㅏㅁ이ㅣ 유남생?</span>
      </div>
      <div className="reply">
        <Image className="comment-img" src={comment} />
        <span>5</span>
      </div>
    </CommentItemContainer>
  )
}

export default ProjectCommentItem;