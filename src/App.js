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
          postData={props.state.profilePageReducer.postData}  
          userData={props.state.dialogsPageReducer.userData}
          messagesData={props.state.dialogsPageReducer.messagesData}
          friendsData={props.state.leftBarReducer.friendsData}
          
          dispatch={props.dispatch}
          newPostText={props.state.profilePageReducer.newPostText}
          newMessageText={props.state.dialogsPageReducer.newMessageText}
          
        />} />
    </Router>
  )
}

