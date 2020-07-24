import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'shared/utils/history'
import Routing from './app/components/Routing'

export const App = (props) => {
  console.log(props)
  return (
    <Router history={history}>
      <Route path='/' render={()=>
        <Routing
          postData={props.state.profilePage.postData}  
          userData={props.state.dialogsPage.userData}
          messagesData={props.state.dialogsPage.messagesData}
       
        />} />
    </Router>
  )
}

