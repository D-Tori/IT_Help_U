import { all } from 'redux-saga/effects';
import boardSaga from './board';
import userSaga from './user';

export default function* rootSaga() {
  yield all([boardSaga(), userSaga()]);
}
