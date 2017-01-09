import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// the subSideNav links are in another file so this isnt
// super cluttered
import { subSideNavLinks } from './subSideNavLinks'

// just some styles for the boys
import './override.css';
// main layout (includes nav and where other layouts go)
import AppLayout from './layouts/AppLayout'
import { UnderConstruction } from './layouts/UnderConstruction'
import { NotFound } from './layouts/NotFound'
import { InventoryLayout } from './layouts/InventoryLayout'
import { LandingLayout } from './layouts/LandingLayout'
import { Login } from './components/login/Login'
import { Register } from './components/register/Register'
import { CurrentUser } from './components/currentUser/CurrentUser'


ReactDOM.render(
  <Router history={ browserHistory }>
    {/*
      // check to see that a user is logged in when they
      // enter the app. if not, redirect to the login view
    */}
    <Route
      path='/'
      component={ AppLayout }
      onEnter={() => {
        console.log('sup girlie');
      }}
    >
      <IndexRoute
        component={ LandingLayout }
        isSubSideNavOpen={ false }
      />
      <Route
        path='/login'
        component={ Login }
        isSubSideNavOpen={ false }
      />
      <Route
        path='/register'
        component={ Register }
        isSubSideNavOpen={ false }
      />
      <Route
        path='/inventory'
        component={ InventoryLayout }
        isSubSideNavOpen={ true }
        subSideNavHeader='Inventory'
        subSideNavLinks={ subSideNavLinks.inventory }
      >
        <Route
          path='/inventory/add'
          component={ NotFound }
        />
        <Route
          path='/inventory/edit'
          component={ NotFound }
        />
        <Route
          path='/inventory/all'
          component={ NotFound }
        />
        <Route
          path='/inventory/settings'
          component={ NotFound }
        />
      </Route>
      <Route
        path='/customers'
        component={ UnderConstruction }
        isSubSideNavOpen={ false }
      />
      <Route
        path='/reservations'
        component={ UnderConstruction }
        isSubSideNavOpen={ false }
      />
      <Route
        path='/users'
        component={ UnderConstruction }
        isSubSideNavOpen={ false }
      />
      <Route
        path='/current_user'
        component={ CurrentUser }
        isSubSideNavOpen={ false }
      />
      <Route
        path='*'
        component={ NotFound }
        isSubSideNavOpen={ false }
      />
    </Route>
  </Router>,
  document.getElementById('root')
);
