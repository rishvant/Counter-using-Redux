// src/reducers/index.js

import { combineReducers } from 'redux';
import counterReducer from "./slice/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here
});

export default rootReducer;
