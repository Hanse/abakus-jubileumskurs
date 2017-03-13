import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const logger = store => next => action => {
  console.log(action);
  next(action);
  console.log(store.getState());
};

export default createStore(rootReducer, applyMiddleware(thunk, logger));
