// 루트 리듀서
import { combineReducers } from 'redux';
import board from './boards';
import menu from './menus';
import mentors from './mentors';

const rootReducer = combineReducers({
  board,
  menu,
  mentors
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
