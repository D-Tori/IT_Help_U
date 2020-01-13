import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useBoards() {
  const boards = useSelector((state: RootState) => state.board.boards);
  return boards;
}
