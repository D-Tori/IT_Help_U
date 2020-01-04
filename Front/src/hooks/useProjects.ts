import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useProjects() {
  const projects = useSelector((state: RootState) => state.project);
  return projects;
}
