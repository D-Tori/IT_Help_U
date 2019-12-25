import React from 'react';
import ProjectDetail from './ProjectDetail';
import MenuTitle from '../../common/MenuTitle';
import styled from 'styled-components';
import SubmitBtn from '../../common/SubmitBtn';
import ProjectComment from './ProjectComment';
import { useParams } from 'react-router-dom';


const PageViewContainer = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 1200px;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;


function ProjectDetailPage () {

  const { id } = useParams();

  return(
      <PageViewContainer>
        <MenuTitle menuTitle="프로젝트 상세보기" backBtnName="목록보기"/>
        <ProjectDetail />
        <SubmitBtn />
        <MenuTitle menuTitle="댓글" addBtnName="댓글쓰기" />
        <ProjectComment />
      </PageViewContainer>
  )
}

export default ProjectDetailPage;
