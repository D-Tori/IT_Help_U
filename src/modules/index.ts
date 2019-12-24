// 루트 리듀서
import { combineReducers } from 'redux';
import board from './boards';
import mentors from './mentors';

const rootReducer = combineReducers({
  board,
  mentors
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
