import React, { useState, ChangeEvent, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import useAddProject from '../../../hooks/AddProject';

import { DatePicker } from '@y0c/react-datepicker';
// import calendar style
// You can customize style by copying asset folder.
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import 'dayjs/locale/ko';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useHistory } from 'react-router-dom';



function ProjectForm() {

  const history = useHistory();

  const locale = {
    name: 'ko',
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
  };



  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [required, setRequired] = useState('');
  const [place, setPlace] = useState('');
  const [intro, setIntro] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const addProject = useAddProject();
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const onChangePlace = (e: ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value);
  };
  const onChangeRequired = (e: ChangeEvent<HTMLInputElement>) => {
    setRequired(e.target.value);
  };
  const onChangeIntro = (e: ChangeEvent<HTMLInputElement>) => {
    setIntro(e.target.value);
  };

  const onChangeStartDate = (date: any) => {
    console.log("시작일 : ", date);
    console.log(date.toDate());
    setStartDate(date.toDate());
  };

  const onChangeEndDate = (date: any) => {
    console.log("종료일 : ", date);
    console.log(date.toDate());
    setEndDate(date.toDate());
  };



  const project = {
    title: title,
    category: category.split(','),
    required: required,
    place: place,
    intro: intro,
    startDate: startDate,
    endDate: endDate
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addProject(project);
    setTitle('');
    setCategory('');
    setIntro('');
    setRequired('');
    setPlace('');
    setStartDate(new Date());
    setEndDate(new Date());
    history.push('/projects');
  };

  return (
    <Form onSubmit={onSubmit} >
      {/* <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>분야</Form.Label>
        <Form.Control as="select">
          <option>개발자</option>
          <option>디자이너</option>
        </Form.Control>
      </Form.Group> */}
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>제목</Form.Label>
        <Form.Control value={title} onChange={onChangeTitle} placeholder="제목을 입력하세요." />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>간단한 소개</Form.Label>
        <Form.Control value={intro} onChange={onChangeIntro} placeholder="제목을 입력하세요." />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>사용 기술(프로그램)</Form.Label>
        <Form.Control value={category} onChange={onChangeCategory} placeholder=",로 구분합니다." />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Row>
          <Col>
            <Form.Label>시작일</Form.Label>
            <DatePicker className="date-input" locale={locale} onChange={onChangeStartDate}/>
          </Col>
          <Col>
            <Form.Label>종료일</Form.Label>
            <DatePicker className="date-input" locale={locale} onChange={onChangeEndDate}/>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">

      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>장소</Form.Label>
        <Form.Control value={place} onChange={onChangePlace} placeholder="장소를 입력하세요." />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>요구 사항</Form.Label>
        <Form.Control value={required} onChange={onChangeRequired} as="textarea" rows="3" />
      </Form.Group>
      <button type="submit">작성완료</button>
    </Form>

  )
}

export default ProjectForm;

