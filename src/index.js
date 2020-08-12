import 'babel-polyfill'
import 'babel-core'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContainer } from 'react-hot-loader'
import store from './app/Redux/ReduxStore'
import { BrowserRouter } from 'react-router-dom'
import Provider from './StoreContext'



const rerenderEntireTree = (state) =>{
 
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <Provider value ={props.store}>
          <App/>
        </Provider>
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
  

rerenderEntireTree(store.getState())

store.subscribe(()=>{
  const state = store.getState()
  rerenderEntireTree(state)

})