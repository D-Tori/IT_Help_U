import React from 'react';
import Card from 'react-bootstrap/Card';
import fifthImage from '../images/5.jpg'

function ProjectItem() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={fifthImage} />
      <Card.Body>
        <Card.Title>프로젝트 제목</Card.Title>
        <Card.Text>
          프로젝트 소개
    </Card.Text>
        <div className="info-container">
          <div className="block">장소</div>
          <div className="block">서울시 금천구</div>
        </div>
      </Card.Body>
    </Card>
  )

}

export default ProjectItem;