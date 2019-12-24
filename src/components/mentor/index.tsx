import React from 'react';
import styled from 'styled-components';
import MentorList from './MentorList';
import MentorField from './MentorField';
import MenuTitle from '../common/MenuTitle';

function MentorsPage(){
  return(
    <>
      <PageContent>
        <MenuTitle menuTitle="관련 기술" />
        <MentorField />
        <MenuTitle menuTitle="멘토" toggleBtnName="명예멘토" />
        <MentorList />
      </PageContent>
    </>
  );
}

export default MentorsPage;

const PageContent = styled.div`
  overflow: auto;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  @media (min-width: 1025px){
    width: 1200px;
  }
`
