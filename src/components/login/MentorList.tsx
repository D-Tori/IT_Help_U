import React from 'react';
import styled from 'styled-components';
import MentorCard from './MentorCard';
import Row from 'react-bootstrap/Row';

function MentorList() {
  return(
    <ListStyle>
      <div className="title">
        멘토
      </div>
      <Row>
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </Row>
    </ListStyle>
  );
}

export default MentorList;

const ListStyle = styled.div`
  margin: 30px 0 30px;
  letter-spacing: 0;
  font-size: 100%;

  .title{
    font-size: 23px;
    line-height: 25px;
    font-weight: bold;
    margin: 35px 15px 10px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .row {
    margin: 0px;
    
  }
`
