import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ApplyForm(){
  return(
    <ContentBox>
      <Form id="login-form" method="post">
        <Form.Group controlId="company">
          <Form.Label>회사 <abbr title="required"> *</abbr></Form.Label>
          <Form.Control type="name" placeholder="회사명을 입력해주세요" />
        </Form.Group>
        <Form.Group controlId="department">
          <Form.Label>부서 <abbr title="required"> *</abbr></Form.Label>
          <Form.Control type="name" placeholder="부서명을 입력해주세요" />
        </Form.Group>
        <Form.Group controlId="mentorInfo">
          <Form.Label>멘토 소개 <abbr title="required"> *</abbr></Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="자신의 소개를 적어주세요" />
        </Form.Group>
        <Form.Group controlId="mentorSpec">
          <Form.Label>주요 경력 <abbr title="required"> *</abbr></Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="주요 경력사항을 자세히 적어주세요" />
        </Form.Group>
        <Form.Group controlId="mentorEtc">
          <Form.Label>기타 사항 </Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="기타 사항을 적어주세요" />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn btn-block">
          멘토 지원하기
        </Button>
      </Form>
    </ContentBox>
  );
}

export default ApplyForm;

const ContentBox = styled.div `

  abbr[title="required"] {
    color: #ff2d55;
    font-weight: bold;
    text-decoration: none;
  }

  form {
    text-align: left;
  }

`
