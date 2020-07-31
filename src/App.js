import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'shared/utils/history'
import Routing from './app/components/Routing'

export const App = (props) => {

  return (
    <Router history={history}>
      <Route path='/' render={()=>
        <Routing
          postData={props.state.profilePage.postData}  
          userData={props.state.dialogsPage.userData}
          messagesData={props.state.dialogsPage.messagesData}
          friendsData={props.state.leftBar.friendsData}
          addPost={props.addPost}
          newPostText={props.state.profilePage.newPostText}
          updateNewPostText={props.updateNewPostText}
          addMessage={props.addMessage}
          newMessageText={props.state.dialogsPage.newMessageText}
          updateNewMessageText={props.updateNewMessageText}
        />} />
    </Router>
  )
}

