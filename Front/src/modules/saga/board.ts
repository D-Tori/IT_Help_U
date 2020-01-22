import { all, fork, call, put, takeEvery } from 'redux-saga/effects';

import axios from 'axios';
import * as actions from '../boards';


// axios 객체 생성
const boardAPI = axios.create({baseURL: 'http://localhost:5000'})


 // *********************** 게시글 가져오기 ************************  //
/**
 * 게시글 가져오기 API 요청 메소드
 * @param boardId 게시글 Id
 * @returns Promise
 */
function loadBoardApi (boardId?: number) {
  return boardAPI.get(boardId ? `/board/${boardId}` : '/board', {
    withCredentials: true
  });
};


/**
 * 게시글 가져오기  위한 Worker
 * @param payload 게시글의 type, id를 담은 객체
 * @yields put(성공 액션 생성 함수), put(실패 액션 생성 함수)
 */
function* loadBoard (payload: ReturnType<typeof actions.getBoardRequest>) {
  try{
    const { id } = payload;
    const data = yield call(loadBoardApi, id);
    console.log('API로 넘어온 data', data);
    yield put(actions.getBoardSuccess(data));
  }catch (err) {
    console.log('err : ' , err);
    yield put(actions.getBoardFailure(err));
  }
}


// *********************** 게시글 생성 ************************  //


function addBoardApi(board: actions.Board) {
  return boardAPI.post('/board', board )
}

function* addBoard (payload: ReturnType<typeof actions.addBoardRequest>) {
  try{
    const { addData } = payload;
    const data = yield call(addBoardApi, addData);
    console.log('addBoard의 성공 여부', data);
    yield put(actions.addBoardSuccess(data));
  }catch(err) {
    yield put(actions.addBoardFailure(err));
  }
};

function* watchBoard() {
  yield takeEvery(actions.ADD_BOARD_REQUEST, addBoard);
  yield takeEvery(actions.GET_BOARD_REQUEST, loadBoard);
};



/**
 * board 사가 생성
 * @yield all([..., fork(Watcher())])
 */
export default function* boardSaga() {
  yield all([
    fork(watchBoard)
  ]);
}
