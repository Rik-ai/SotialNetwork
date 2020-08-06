import 'babel-polyfill'
import 'babel-core'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContainer } from 'react-hot-loader'
import store from './app/Redux/state'
import { BrowserRouter } from 'react-router-dom'



const rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <App
          state={state} 
          dispatch={store.dispatch.bind(store)} 
        />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
  

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)