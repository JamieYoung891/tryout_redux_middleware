import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import loggerMiddleware from './lib/loggerMiddleware'

const store = createStore(
  modules,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    loggerMiddleware,
  ),
)
// applyMiddleware is used for to apply middleware
// Redux Devtools Extension must be precede applyMiddleware

export default store;