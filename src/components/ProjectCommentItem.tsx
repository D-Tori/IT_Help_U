import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import firstImage from '../images/1.jpg'
import user from '../images/user.svg';
import comment from '../images/comment.svg';

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
    display: flex;
    align-content: center;
    width: 100%;
    height: 60px;
    padding: 20px;
  }
  .comment-profile-img {
    display: flex;
    width: 60px;
    height: 60px;
    
  }

  span {
    display: flex;
    align-items: center;
  }

  .date {
    display: flex;
    align-items: center;
  }

  .comment-user {
    display: flex;
    width: 30px;
    
    border: none;
  }

  .id-date-container {
    display: flex;
    margin-left: 15px;
    flex-direction: column;
  }

  .id-container {
    display: flex;
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
  return(
    <CommentItemContainer>
      <div className="comment-header">
        
        <Image className="comment-profile-img" src={firstImage} roundedCircle/>
        <div className="id-date-container">
          <div className="id-container">
            <span>hongis0327</span>
            <Image className="comment-user" src={user} thumbnail/>    {/* 글쓴이인지 아닌지에 따라 디스플레이 none or block */}
          </div>
          <div className="date">2019-12-31 00:00:00</div>
        </div>        
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