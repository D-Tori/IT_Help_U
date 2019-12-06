import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function MentorField(){
  return(
    <Field>
      <Container>
        <div className="title">
          멘토링 분야
        </div>
        <ButtonToolbar>
          <Button variant="outline-dark" href="#">Java</Button>
          <Button variant="outline-dark" href="#">JavaScript</Button>
          <Button variant="outline-dark" href="#">HTML</Button>
          <Button variant="outline-dark" href="#">CSS</Button>
          <Button variant="outline-dark" href="#">C</Button>
          <Button variant="outline-dark" href="#">C++</Button>
          <Button variant="outline-dark" href="#">Python</Button>
          <Button variant="outline-dark" href="#">React</Button>
          <Button variant="outline-dark" href="#">Angular</Button>
          <Button variant="outline-dark" href="#">Vue</Button>
        </ButtonToolbar>
      </Container>
    </Field>
  );
}

export default MentorField;

const Field = styled.div`
  margin: 35px 0;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;
  letter-spacing: 0;
  font-size: 100%;

  .title{
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .btn-outline-dark{
    margin-right: 5px;
    margin-bottom: 5px;
  }
`