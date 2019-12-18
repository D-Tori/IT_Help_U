import { combineReducers } from 'redux';
import board from './boards';
import menu from './menus';

const rootReducer = combineReducers({
  board,
  menu
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
