import React from 'react';
import styled from 'styled-components';
import ProjectCommentItem from './ProjectCommentItem';


const CommentContainer = styled.div`
  width: 100%;
  min-height: 400px;
`

function ProjectComment() {
  return (
    <CommentContainer>
      <ProjectCommentItem />
      <ProjectCommentItem />
    </CommentContainer>
  )
}

export default ProjectComment;
