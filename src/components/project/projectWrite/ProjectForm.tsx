import React, { useState, ChangeEvent, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import useAddProject from '../../../hooks/AddProject';



function ProjectForm() {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [required, setRequired] = useState('');
  const [place, setPlace] = useState('');
  const [intro, setIntro] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
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


  const project = {
    title: title,
    category: category.split(','),
    required: required,
    place: place,
    intro: intro
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addProject(project);
    setTitle('');
    setCategory('');
    setIntro('');
    setRequired('');
    setPlace('');
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

