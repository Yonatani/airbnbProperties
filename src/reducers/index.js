import { combineReducers } from 'redux';
import properties from './properties';
import reviews from './reviews';

const guestyApp = combineReducers({
  properties,
  reviews
});

export default guestyApp;
