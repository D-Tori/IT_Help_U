import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addBoardRequest, Board } from '../modules/boards';

export default function useAddBoard() {
  const dispatch = useDispatch();
  return useCallback((board: Board) => dispatch(addBoardRequest(board)), [dispatch]);
}
