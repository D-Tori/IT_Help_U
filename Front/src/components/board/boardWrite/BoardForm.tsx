import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import useAddBoard from '../../../hooks/AddBoard';
import { Board } from '../../../modules/boards';
import { useHistory } from 'react-router-dom';
import useBoards from '../../../hooks/useBoards';







function BoardForm() {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const addBoard = useAddBoard();
  const boardState = useBoards();
  const isAddPosted = boardState.isAddPosted;
  console.log(isAddPosted);
  const history = useHistory();


  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };
  const onChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const board: Board = {
    title: title,
    category: category,
    content: content,
    buser: "학",
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addBoard(board);
    setTitle('');
    setCategory('');
    setContent('');
  };

  useEffect(() => {
    historyPush();
  }, [isAddPosted]);

  const historyPush = () => {
    if(isAddPosted === true) {
      history.push('/boards');
    }
  }

  return (
    <Form onSubmit={onSubmit} >
      {/* <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>분야</Form.Label>
        <Form.Control as="select">
          <option>개발자</option>
          <option>디자이너</option>
        </Form.Control>
      </Form.Group> */}
      <Form.Group controlId="ControlInputTitle">
        <Form.Label>제목</Form.Label>
        <Form.Control value={title} onChange={onChangeTitle} placeholder="제목을 입력하세요." />
      </Form.Group>
      <Form.Group controlId="ControlInputCategory">
        <Form.Label>관련 기술(프로그램)</Form.Label>
        <Form.Control value={category} onChange={onChangeCategory} placeholder=",로 구분합니다." />
      </Form.Group>
      <Form.Group controlId="ControlTextAreaContent">
        <Form.Label>내용</Form.Label>
        <Form.Control value={content} onChange={onChangeDesc} as="textarea" rows="3" />
      </Form.Group>
      <button type="submit">작성완료</button>
    </Form>
  )
}

export default BoardForm;
