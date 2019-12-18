import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addBoard } from '../modules/boards';

export default function useAddBoard() {
  const dispatch = useDispatch();
  return useCallback((text, desc, category, user) => dispatch(addBoard(text, desc, category, user)), [dispatch]);
}