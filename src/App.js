import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'shared/utils/history'
import Routing from './app/components/Routing'

export const App = (props) => {
  return (
    <Router history={history}>
      <Route path='/' render={()=>
        <Routing
          postData={props.postData}  
          userData={props.userData}
          messagesData={props.messagesData}
       
        />} />
    </Router>
  )
}

