import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'shared/utils/history'
import Routing from './app/components/Main'

export const App = (props) => {
  console.log(props)
  return (
    <Router history={history}>
      <Route path='/' render={()=>
        <Routing
          postData={props.state.profilePage.postData}  
          userData={props.state.dialogsPage.userData}
          messagesData={props.state.dialogsPage.messagesData}
          friendsData={props.state.leftBar.friendsData}
          
          dispatch={props.dispatch}
          newPostText={props.state.profilePage.newPostText}
          newMessageText={props.state.dialogsPage.newMessageText}
          
        />} />
    </Router>
  )
}

