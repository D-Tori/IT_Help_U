import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addProject } from '../modules/projects';

export default function useAddProject() {
  const dispatch = useDispatch();
  return useCallback((project) => dispatch(addProject(project)), [dispatch]);
}
