import { combineReducers } from 'redux';
import account from '../counterFeature/accountReducer';
import { authorReducer, taskReducer } from '../CourseFeature/courseReducer';
import { userReducer } from '../userFeature/userReducer';

const reducers = combineReducers({
  account,
  authorReducer,
  taskReducer,
  userReducer,
});

export default reducers;
