import { combineReducers } from 'redux';
import auth from './auth';
import labels from './label';

export default combineReducers({ auth, labels });
