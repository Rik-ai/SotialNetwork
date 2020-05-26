import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Main from './Main'

const Routing = () => {

  return (
    <Switch>
      <Route
        path='/'
        component={Main}
      />
      <Redirect
        to='/'
      />
    </Switch>
  )
}

export default Routing
