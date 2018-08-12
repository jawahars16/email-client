import { combineReducers } from 'redux';
import auth from './auth';
import labels from './label';
import setup from './setup';

export default combineReducers({ auth, labels, setup });
