import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'shared/utils/history'
import Main from './app/components/Main'

export const App = (props) => {

  return (
    <Router history={history}>
      <Route path='/' render={()=>
        <Main/>} />
    </Router>
  )
}

