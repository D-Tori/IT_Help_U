import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useUser() {
  const user = useSelector((state: RootState) => state.user);
  return user;
}


// useSelector 를 사용해서 상태를 조회하는 코드?
