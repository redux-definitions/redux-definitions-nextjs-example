import { createStore, combineReducers, applyMiddleware } from 'redux'
import { startRepl } from 'redux-enterprise'
import { reducers } from '../reducers'

const bindMiddleware = (middleware = []) => {
  if (process.env.NODE_ENV !== 'production') {
    const { createLogger } = require('redux-logger')
    middleware.push(createLogger({}))
  }
  return applyMiddleware(...middleware)
}

export function configureStore(initialState = {}) {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    bindMiddleware()
  )

  startRepl(store)

  return store
}
