import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { deleteBoardRequest } from '../modules/boards';


export default function useDeleteBoard() {
  const dispatch = useDispatch();
  return useCallback((id) => dispatch(deleteBoardRequest(id)), [dispatch]);
}
