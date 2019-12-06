import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import MentorCard from './MentorCard';

function Mentors(){
  return(
    <React.Fragment>
      <Header />
      <PageContent>
        <JobType>
          <div className="blocktitle">
            멘토링 유형
          </div>
        </JobType>  
        <MentorCard />
      </PageContent>
    </React.Fragment>
  );
} 

export default Mentors;

const PageContent = styled.div`
  padding-top: 44px;
  overflow: auto;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  z-index: 1;
`

const JobType = styled.div`
  margin: 35px 0;
  padding: 0 15px;
  color: #6d6d72;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  letter-spacing: 0;
  font-size: 100%;

  .blocktitle{
    margin-left: 4px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
  }
}
`