import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addBoardRequest } from '../modules/boards';

export default function useAddBoard() {
  const dispatch = useDispatch();
  return useCallback((board) => dispatch(addBoardRequest(board)), [dispatch]);
}
