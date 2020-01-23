import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../user';


// axios 객체 생성
const API = axios.create({baseURL: 'http://localhost:5000', withCredentials: true});


function loginUserApi (userData: actions.UserFormType) {
  return API.post('/user/login', userData);
}

function* loginUser (payload: ReturnType<typeof actions.loginUserRequest>){
  try {
    const { addData } = payload;
    const data = yield call(loginUserApi, addData);
    console.log('login 여부', data);
    yield put(actions.loginUserSuccess(data));
  }catch(err) {
    yield put(actions.loginUserFailure(err));
  }
}

/**
 * 유저 회원 가입 API
 * @param userData 유저 Form
 * @returns Promise
 */
function signUpUserApi (userData: actions.UserFormType) {
  return API.post('/user/signUp', userData);
}

function* signUpUser (payload: ReturnType<typeof actions.addUserRequest>){
  try {
    const { addData } = payload;
    const data = yield call(signUpUserApi, addData);
    console.log('addUser의 성공 여부', data);
    yield put(actions.addUserSuccess(data));
  }catch(err) {
    yield put(actions.addUserFailure(err));
  }
};

/** *************************멘토 정보 가져오기 *************************
 * 멘토 정보 가져오기 API 요청 메소드
 * @param id 유저 id
 * @returns Promise
 */
function loadMentorApi (id?: number) {
  return API.get(id ? `/mentors/${id}` : '/mentors');
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
 function* watchUser() {
  yield takeEvery(actions.GET_MENTOR_REQUEST, loadMentor);
  yield takeEvery(actions.ADD_USER_REQUEST, signUpUser);
  yield takeEvery(actions.LOGIN_USER_REQUEST, loginUser);
};


/**
 * mentor saga 생성
 * @yield all([..., fork(Watcher())])
 */
 export default function* userSaga() {
  yield all([
    fork(watchUser)
  ]);
}
