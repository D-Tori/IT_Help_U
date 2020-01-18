import React, { useEffect } from 'react';
import styled from 'styled-components';
import MentorContainer from './MentorContainer';
import { useDispatch } from 'react-redux';
import { getMentorRequest } from '../../../modules/user';
import { useParams } from 'react-router-dom';

function MentorDetailPage(){

  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = Number(id);

  useEffect(() =>{
    dispatch(getMentorRequest(uid));
  }, []);

  return(
    <PageStyled>
      <MentorContainer />
    </PageStyled>
  );
}

export default MentorDetailPage;

const PageStyled = styled.div`
  display: flex;

`
