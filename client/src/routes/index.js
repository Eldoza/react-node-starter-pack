import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import Homepage from '../components/Homepage'
import Main from '../components/Main'
import React from "react";

const renderHomepage = () => <Homepage />

const Routes = () => (
  <Router>
    <Main>
      <Switch>
        <Route exact path="/"             render={ renderHomepage } />

        <Redirect path="/" to="/"/>
      </Switch>
    </Main>
  </Router>
)

export default Routes
