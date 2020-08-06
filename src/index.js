import 'babel-polyfill'
import 'babel-core'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContainer } from 'react-hot-loader'
import store from './app/Redux/state'



const rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <AppContainer>
      <App
        state={state} 
        dispatch={store.dispatch.bind(store)} 
      />
    </AppContainer>,
    document.getElementById('root')
  )
}
  

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)