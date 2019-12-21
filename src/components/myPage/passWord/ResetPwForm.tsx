import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ResetPwForm(){
  return(
    <Form id="resetPw-form" method="post">
      <Form.Group controlId="resetEmail">
        <Form.Label>이메일 주소</Form.Label>
        <Form.Control type="email" placeholder="이메일 주소를 입력하세요" />
      </Form.Group>
      <Form.Group controlId="resetPassword">
        <Form.Label>새 비밀번호 (나오면 안됨)</Form.Label>
        <Form.Control type="password" placeholder="새 비밀번호를 입력하세요" />
      </Form.Group>
      <Form.Group controlId="verificationCode">
        <Form.Label>확인코드 (나오면 안됨)</Form.Label>
        <Form.Control type="" placeholder="확인코드를 입력하세요" />
      </Form.Group>
      <Button variant="primary" type="submit" className="btn btn-block">
        확인 메일 보내기
      </Button>
    </Form>
  );
}


export default ResetPwForm;