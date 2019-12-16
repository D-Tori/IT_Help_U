import React from 'react';
import styled from 'styled-components';
import IdDateComponent from './IdDateComponent';
import Image from 'react-bootstrap/Image';
import like from '../images/like.svg';

import upArrow from '../images/upArrow.svg';
import downArrow from '../images/downArrow.svg';
import LikeContainer from './LikeContainer';

const CommentItem = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #ddd;

  .comment-content {
    width: 100%;
    padding-top: 20px;
    min-height: 100px;
  }
  p {
    margin: 0;
  }
  
  .flex-col {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
  }

`;

function BoardCommentItem() {
  return (
    <CommentItem>

      <div className="flex-col">
        <IdDateComponent imgBool={true} />
        <div className="comment-content">
          <p>왓더 뻑</p>
        </div>
      </div>
      <LikeContainer/>

    </CommentItem>
  )
}

export default BoardCommentItem