import { all, fork, call, put, takeEvery } from 'redux-saga/effects';

import axios from 'axios';
import {BoardAction, getBoardSuccess, getBoardFailure, getBoardRequest, Board, BoardsState} from '../boards';


function loadBoardApi (boardId?: number) {
  return axios.get(boardId ? `/board/${boardId}` : '/board', {
    withCredentials: true
  });
};

function* loadBoard (payload: ReturnType<typeof getBoardRequest>) {
  try{
    const { id } = payload;
    const data = yield call(loadBoardApi, id);
    console.log('API로 넘어온 data', data);
    yield put({type: "GET_BOARD_SUCCESS", payload: data});
  }catch (err) {
    console.log('err : ' , err);
    yield put({
      type: getBoardFailure,
      err
    });
  }
}

function* watchLoadBoard() {
  yield takeEvery("GET_BOARD_REQUEST", loadBoard);
};

export default function* boardSaga() {
  yield all([
    fork(watchLoadBoard),
  ]);
}
