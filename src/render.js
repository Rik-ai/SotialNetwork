import 'babel-polyfill'
import 'babel-core'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from 'state/store'
import {addPost, updateNewPostText} from './app/Redux/state'


export const rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App
          state={state} 
          addPost={addPost} 
          updateNewPostText={updateNewPostText} 
        />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}
  