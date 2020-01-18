// 루트 리듀서
import { combineReducers } from 'redux';
import board from './boards';
import user from './user';
import project from './projects';

const rootReducer = combineReducers({
  board,
  project,
  user
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
