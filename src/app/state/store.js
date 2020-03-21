import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from 'state/reducers'
import rootSaga from 'state/sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware({
  // Catch errors during saga execution
  onError: err => {
    console.error('Uncaught error from Sagas', err, err.stack)
  }
})

const middleware = [
  sagaMiddleware
]

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

// Start root saga
sagaMiddleware.run(rootSaga)

export default store
