import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MenteeForm() {
  return(
    <ContentBox>
      <div className="content-title">
        <h1 className="title">멘티 프로필 작성하기</h1>
        <p className="description">
          질문을 남길 때 멘토님에게 함께 전달되는 필수 정보입니다.
        </p>
      </div>
      <div className="content-form">
        <Form>
          <Form.Group controlId="formName" className="form-group1">
            <Form.Label>이름 <abbr title="required"> *</abbr></Form.Label>
            <Form.Control placeholder="이름을 입력해주세요" />
          </Form.Group>

          <div className="div-container">
            <Form.Group controlId="formEducation" className="form-group1">
              <Form.Label>최종학력 <abbr title="required"> *</abbr></Form.Label>
              <Form.Control as="select">
                <option>선택해주세요</option>
                <option>대학원 졸업</option>
                <option>대학교 졸업</option>
                <option>전문대학교 졸업</option>
                <option>고등학교 졸업 이하</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formSchool" className="form-group1">
              <Form.Label>학교</Form.Label>
              <Form.Control placeholder="학교를 입력해주세요" />
            </Form.Group>
          </div>

          <div className="div-container">
            <Form.Group controlId="formGraduated" className="form-group1">
              <Form.Label>재학/졸업 <abbr title="required">*</abbr></Form.Label>
              <Form.Control as="select">
                <option>선택해주세요</option>
                <option>재학</option>
                <option>졸업</option>
                <option>기타</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formMajor" className="form-group1">
              <Form.Label>전공</Form.Label>
              <Form.Control placeholder="전공을 입력해주세요" />
            </Form.Group>
          </div>

          <Form.Group controlId="formSpec">
            <Form.Label>스펙/경력사항 <abbr title="required"> *</abbr></Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="현재 스펙이나 경력사항을 자세히 적어주시면 상세한 답변을 받을 수 있습니다." />
          </Form.Group>

          <Form.Group controlId="formEtc">
            <Form.Label>기타</Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="관심 분야 등 멘토님이 답변에 참고할 만한 사항을 적어주세요. 예) 프론트엔드에 관심이 있습니다." />
          </Form.Group>

          <div className="btn-container">
            <Button type="submit" className="btn-modified" href="/mentors/question">수정</Button>
          </div>
        </Form>
      </div>
    </ContentBox>
  );
}

export default MenteeForm;

const ContentBox= styled.div`
  display: flex;
  flex-direction: column;
  margin: 81px 0 35px;
  padding: 0 20px;
  width: 800px;

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

  .form-group1{
    width: 49%;
    margin-right: 5px;
    @media(max-width: 799px){
      width:auto;
    }
  }

  .div-container{
    display: flex;

    @media(max-width: 799px){
      flex-direction: column;
    }
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
