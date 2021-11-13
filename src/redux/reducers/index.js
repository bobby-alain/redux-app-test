import { combineReducers } from 'redux';
import account from '../counterFeature/accountReducer';
import courses from '../CourseFeature/courseReducer';

const reducers = combineReducers({
  account,
  courses,
});

export default reducers;
