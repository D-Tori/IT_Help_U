import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useSnsBtn() {
  const snsbtn = useSelector((state: RootState) => state.snsbtn);
  return snsbtn;
}
