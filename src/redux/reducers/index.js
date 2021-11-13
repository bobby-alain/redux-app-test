import { combineReducers } from 'redux';
import account from '../counterFeature/accountReducer';
import { authorReducer, taskReducer } from '../CourseFeature/courseReducer';

const reducers = combineReducers({
  account,
  authorReducer,
  taskReducer,
});

export default reducers;
