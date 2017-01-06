import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// just some styles for the boys
// import 'materialize-css/bin/materialize.css'
// import 'materialize-css/bin/materialize.js'

import './override.css';
// main layout (includes nav and where other layouts go)
import AppLayout from './layouts/AppLayout'
import { LandingLayout } from './layouts/LandingLayout'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Todo from './components/todo/Todo'


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ AppLayout } >
      <IndexRoute component={ LandingLayout }/>
      <Route path='/login' component={ Login } />
      <Route path='/register' component={ Register } />
      <Route path='/todo' component={ Todo } />
    </Route>
  </Router>,
  document.getElementById('root')
);
