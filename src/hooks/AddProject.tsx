import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addBoard } from '../modules/boards';

export default function useAddBoard() {
  const dispatch = useDispatch();
  return useCallback((board) => dispatch(addBoard(board)), [dispatch]);
}
