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
          />}
      />
      <Redirect
        to='/'
      />
    </Switch>
  )
}

export default Routing
