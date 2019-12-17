// 루트 리듀서
import { combineReducers } from 'redux';
import mentors from './mentors';

const rootReducer = combineReducers({
  mentors
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
