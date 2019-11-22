const loggerMiddleware = store => next => action => {
  // The "next" is for middleware to call the next middleware,
  // if there is any left, if not, it will call the reducers
  // to finish the action, resulting change of the state.
  // 
  // Middleware using "dispatch" instead of "next" would call
  // middlewares again, so that, action would fall into infinite
  // loop of middleware calling.

  console.log('previous state', store.getState())
  console.log('action', action)

  const result = next(action)
  console.log('next state', store.getState())
  console.log('\n')

  return result
}

export default loggerMiddleware