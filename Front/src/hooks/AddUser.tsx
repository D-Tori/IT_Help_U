import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addUserRequest, UserFormType } from '../modules/user';

export default function useAddUser() {
  const dispatch = useDispatch();
  return useCallback((user: UserFormType) => dispatch(addUserRequest(user)), [dispatch]);
};
