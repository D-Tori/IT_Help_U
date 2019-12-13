import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuestionForm() {
  return(
    <ContentsContainer>
      <div className="divider" />
      <div className="content-title">
        <h1 className="title">멘토에게 질문하기</h1>
        <p className="description">
          멘토님께 궁금한 점을 질문해 보세요.
        </p>
      </div>
      <div className="content-form">
        <Form>
          <Form.Group controlId="formSummary">
            <Form.Label>고민 한줄 요약 <abbr title="required"> *</abbr></Form.Label>
            <Form.Control placeholder="고민 한줄 요약" />
          </Form.Group>

          <Form.Group controlId="form">
            <Form.Label>구체적인 질문 <abbr title="required"> *</abbr></Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>

          <div className="btn-container">
            <Button type="submit" className="btn-modified" href="/question">임시 저장</Button>
          </div>
        </Form>
      </div>
    </ContentsContainer>
  );
}

export default QuestionForm;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 35px 0;
  padding: 0 15px;
  word-break: break-all;
  width: 800px;

  @media(max-width: 799px){
    width: 100%;
    
  } 

  .divider {
    display: flex;
    content: '';
    background-color: #c8c7cc;
    height: 1px;
    width: 100%;
  }

  .content-title{
    margin: 35px 0;
  }

  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .description {
    color: #6d6d72;
  }

  label{
    display: flex;
  }

  abbr[title="required"] {
    color: #ff2d55;
    font-weight: bold;
    text-decoration: none;
  }

  .btn-container{
    display: flex;
  }

  .btn-modified {
    background-color: #4a47d5;
    width: 30%
    margin: 0 auto;
    @media(max-width: 799px){
      width: 100%
    }
  }
`