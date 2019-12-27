import React from 'react';
import Card from 'react-bootstrap/Card';

import styled from 'styled-components';

import Profile from '../common/Profile';
import ProjectState from './ProjectState';
import { Link, useRouteMatch } from 'react-router-dom';
import { Project } from '../../modules/projects';

const CardItemStyle = styled.li`

  margin-bottom: 10px;
  list-style: none;

  @media (min-width: 1025px) {
      // width: 33.333333%;
  }
  @media (min-width: 768px) {
    width: 49%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }

  .info-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
  .block {
    display: flex;

  }

  .card-body {
    padding: 20px 20px 10px 20px;
  }

  .project-info {
    display: flex;
    justify-content: space-between;
  }


  .card-footer {
    display: flex;
    justify-content: space-between;
  }
  .apply-btn {
    display: flex;

  }
  .apply-btn > a {
    color: #333;
    text-decoration: none;
    &:hover {
      color: #5457ff;
      cursor: pointer
    }
  }
  small {
    display: flex;
  }
`;

type ProjectType = {
  project: Project;
}


function ProjectItem({ project }: ProjectType) {
  const { url } = useRouteMatch();
  const detailURL = `${url}/${project.id}`

  // date format
  const startDate = project.startDate?.toLocaleDateString('ko-KR');
  const endDate = project.endDate?.toLocaleDateString('ko-KR');
  return (
    <CardItemStyle>
      <Card>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
            {project.intro}
          </Card.Text>
          <div className="info-container">
            <div className="block">장소</div>
            <div className="block">{project.place}</div>
          </div>
          <div className="info-container">
            <div className="block">기간</div>
            <div className="block">{startDate} ~ {endDate}</div>
          </div>
          <div className="info-container">
            <div className="block">모집인원</div>
            <div className="block">{project.members?.length}</div>
          </div>
          <div className="project-info">
            <Profile user={project.user}/>
            <ProjectState state={project.state}/>
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          <div className="apply-btn"><Link key={project.id} to={detailURL}>지원하기</Link></div>
        </Card.Footer>
      </Card>
    </CardItemStyle>
  )

}

export default ProjectItem;
