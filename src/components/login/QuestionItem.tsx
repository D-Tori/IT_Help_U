import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function QuestionItem() {
  return(
    <ContentContainer>
      <div className="content-title">
        <div className="title">
          <span>나의 질문/답변</span>
        </div>
      </div>
      <Card>
        <Card.Header as="h5">질문</Card.Header>
        <Card.Body>
          <Card.Title>(고민 한줄) 취업 ㅠㅠ</Card.Title>
          <Card.Text>
            지금 내가 하고 있는게 잘 하고 있는지 잘 모르겠다.
            이렇게 시간만 가는구나.
          </Card.Text>
          <div className="btn-Container">
            <Button className="btn-Modified">수정</Button>
            <Button className="btn-Delete">삭제</Button>
            <Button className="btn-Send">보내기</Button>
          </div>
        </Card.Body>
      </Card>

    </ContentContainer>
  );
}

export default QuestionItem;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 30px 0;
  padding: 0 15px;

  .content-title {
    display: flex;
    margin: 10px;
  }

  .btn-Container {
    display: flex;
    flex-wrap: wrap;
  }

  .btn-Modified, .btn-Delete{
    color: #4a47d5;
    background-color: white;
    margin-right: 5px;

    @media(max-width: 620px){
      width: 100%;
      margin-top: 5px;
    }  
  }

  .btn-Send {
    background-color: #4a47d5;
    margin-right: 5px;

    @media(max-width: 620px){
      width: 100%;
      margin-top: 5px;
    }
  }
`