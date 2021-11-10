import { combineReducers } from 'redux';
import accountReducer from '../counterFeature/accountReducer';

const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
