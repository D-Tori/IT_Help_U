// 루트 리듀서
import { combineReducers } from 'redux';
import board from './boards';
import menu from './menus';
import mentors from './mentors';
import snsbtn from './snsBtn';

const rootReducer = combineReducers({
  board,
  menu,
  mentors,
  snsbtn
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
