// 루트 리듀서
import { combineReducers } from 'redux';
import board from './boards';
import mentors from './mentors';
import project from './projects';

const rootReducer = combineReducers({
  board,
  project,
  mentors
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
