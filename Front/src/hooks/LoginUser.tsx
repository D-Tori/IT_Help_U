import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { loginUserRequest, UserFormType } from '../modules/user';


export default function useLoginUser() {
  const dispatch = useDispatch();
  return useCallback((userForm: UserFormType) => dispatch(loginUserRequest(userForm)), [dispatch]);
}
