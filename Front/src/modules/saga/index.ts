import { all } from 'redux-saga/effects';
import boardSaga from './board';
import mentorSaga from './mentor';

export default function* rootSaga() {
  yield all([boardSaga(), mentorSaga()]);
}
