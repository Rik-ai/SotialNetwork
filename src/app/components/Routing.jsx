import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Main from './Main'

const Routing = (props) => {

  return (
    <Switch>
      <Route
        path='/'
        render={()=>
          <Main 
            postData={props.postData}
            userData={props.userData}
            messagesData={props.messagesData}
            friendsData={props.friendsData}
            addPost={props.addPost}
            newPostText={props.newPostText}
            updateNewPostText={props.updateNewPostText}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText}
          />}
      />
      <Redirect
        to='/'
      />
    </Switch>
  )
}

export default Routing
