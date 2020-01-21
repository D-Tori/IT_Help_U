import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../user';


// axios 객체 생성
const mentorAPI = axios.create({baseURL: 'http://localhost:5000'})


/** *************************멘토 정보 가져오기 *************************
 * 멘토 정보 가져오기 API 요청 메소드
 * @param id 유저 id
 * @returns Promise
 */
function loadMentorApi (id?: number) {
  return mentorAPI.get(id ? `/mentors/${id}` : '/mentors', { withCredentials: true });
};


/**
* 멘토 정보 가져오기 위한 worker
* @param payload 멘토 정보의 type, uid를 담은 객체
* @yields put(성공 액션 생성 함수), put(실패 액션 생성 함수)
*/
function* loadMentor (payload: ReturnType<typeof actions.getMentorRequest>) {
  try{
    // const { uid } = payload;
    const data = yield call(loadMentorApi);
    console.log('API로 넘어온 data', data);
    yield put(actions.getMentorSuccess(data));
  } catch (err) {
    console.log('err : ', err);
    yield put(actions.getMentorFailure(err));
  }
}

/**
 * 멘토 불러오기 Watcher
 * @yield takeEvery(Action type, Generator funtion)
 */
 function* watchLoadMentor() {
  yield takeEvery(actions.GET_MENTOR_REQUEST, loadMentor);
};


/**
 * mentor saga 생성
 * @yield all([..., fork(Watcher())])
 */
 export default function* mentorSaga() {
  yield all([
    fork(watchLoadMentor),
  ]);
}
