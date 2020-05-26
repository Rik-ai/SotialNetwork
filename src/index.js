import 'babel-polyfill'
import 'babel-core'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from 'state/store'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)
