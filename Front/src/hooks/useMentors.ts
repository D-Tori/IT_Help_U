import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useMentors() {
  const mentors = useSelector((state: RootState) => state.mentors);
  return mentors;
}


// useSeleector 를 사용해서 상태를 조회하는 코드?
