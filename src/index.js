import 'babel-polyfill'
import 'babel-core'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from 'state/store'
import state, { subscribe } from './app/Redux/state'
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './app/Redux/state'


const rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App
          state={state} 
          addPost={addPost} 
          updateNewPostText={updateNewPostText} 
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}
  

rerenderEntireTree(state)

subscribe(rerenderEntireTree)