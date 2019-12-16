import { combineReducers } from 'redux';
import board from './boards';


const rootReducer = combineReducers({
  board
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;