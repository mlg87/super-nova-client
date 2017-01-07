import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// just some styles for the boys
import './override.css';
// main layout (includes nav and where other layouts go)
import AppLayout from './layouts/AppLayout'
import { InventoryLayout } from './layouts/InventoryLayout'
import { LandingLayout } from './layouts/LandingLayout'
import Login from './components/login/Login'
import Register from './components/register/Register'


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ AppLayout }>
      <IndexRoute component={ LandingLayout }/>
      <Route path='/login' component={ Login }/>
      <Route path='/register' component={ Register }/>
      <Route path='/inventory' component={ InventoryLayout }/>
      <Route path='*' component={ Login }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
