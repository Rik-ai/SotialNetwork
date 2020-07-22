import 'babel-polyfill'
import 'babel-core'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from 'state/store'

const postData = [
  {id: 1, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1},
  {id: 2, message: "It's my first post", likesCount: 7, dislikeCount: 2},
  {id: 1, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1},
  {id: 1, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1}
]

const userData = [
  {id: 1, name: 'Ivan'},
  {id: 2, name: 'Maria'},
  {id: 3, name: 'Andry'},
  {id: 4, name: 'Jin'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Anna'}
]

const messagesData = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you ?'},
  {id: 3, message: 'Wtf man?'},
  {id: 4, message: 'You are the best !!'},
  {id: 5, message: 'Why nobody love me ?'},
  {id: 6, message: 'Yo'}
]

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App
        postData={postData} 
        userData={userData}
        messagesData={messagesData}
      />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)
  