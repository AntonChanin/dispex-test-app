import { combineReducers } from 'redux';
import { profileReducer as profile } from './profile';

export const rootReducer = combineReducers({
  profile,
});