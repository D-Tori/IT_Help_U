import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ApplyForm(){
  return(
    <Form id="login-form" method="post">
      <Form.Group controlId="company">
        <Form.Label>회사</Form.Label>
        <Form.Control type="name" placeholder="회사명을 입력해주세요" />
      </Form.Group>
      <Form.Group controlId="department">
        <Form.Label>부서</Form.Label>
        <Form.Control type="name" placeholder="부서명을 입력해주세요" />
      </Form.Group>
      <Button variant="primary" type="submit" className="btn btn-block">
        멘토 지원하기
      </Button>
    </Form>
  );
}

export default ApplyForm;
