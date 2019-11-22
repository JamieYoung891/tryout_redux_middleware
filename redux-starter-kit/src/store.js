import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  modules,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
)

// redux-thunk makes asynchronous porgramming possible,
// enabling function to pass redux lifecycle

export default store;