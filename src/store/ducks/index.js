import { combineReducers } from 'redux';
import counterSlice from './counter';

const reducers = combineReducers({
  counter: counterSlice,
});

export default reducers;
