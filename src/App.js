import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'shared/utils/history'

import './app/shared/styles/main.scss'

import Routing from './app/components/Routing'

export const App = () => {
  return (
    <Router history={history}>
      <Route path='/' component={Routing} />
    </Router>
  )
}

