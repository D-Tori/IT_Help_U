import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import useAddBoard from '../../../hooks/AddBoard';
import { Board } from '../../../modules/boards';
import { useHistory } from 'react-router-dom';
import useBoards from '../../../hooks/useBoards';







function BoardForm() {

  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');
  const addBoard = useAddBoard();
  const boardState = useBoards();
  const { isAddPosting } = boardState;
  const history = useHistory();


  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const onChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const board: Board = {
    title: title,
    tags: tag.split(','),
    content: content,
    writer: "학",
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addBoard(board);
    setTitle('');
    setTag('');
    setContent('');
  };

  useEffect(() => {
    if(isAddPosting) {
      history.push('/boards');
    }
  }, [isAddPosting]);

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
        <Form.Control value={tag} onChange={onChangeTag} placeholder=",로 구분합니다." />
      </Form.Group>
      <Form.Group controlId="ControlTextAreaContent">
        <Form.Label>내용</Form.Label>
        <Form.Control value={content} onChange={onChangeDesc} as="textarea" rows="3" />
      </Form.Group>
      <button  type="submit">작성완료</button>
    </Form>
  )
}

export default BoardForm;
