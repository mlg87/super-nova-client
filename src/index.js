import React from 'react'
import { AppRouter } from 'bin/router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducers } from 'reducers'

// just some styles for the boys
import 'override.css';

const store = createStore(reducers)

<<<<<<< HEAD
ReactDOM.render(
  <Router history={ browserHistory }>
    <Route
      path='/'
      component={ AppLayout }
    >
      <IndexRoute
        component={ LandingLayout }
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
        component={ Reservations }
        isSubSideNavOpen={ false }
      />
      <Route
        path='/users'
        component={ UsersLayout }
        isSubSideNavOpen={ true }
        subSideNavHeader='Users'
        subSideNavLinks={ subSideNavLinks.users }
      >
        <Route
          path='/users/add'
          component={ Register }
        />
      </Route>
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
=======
render(
  <Provider store={store}>
    {AppRouter}
  </Provider>
  , document.getElementById('root')
>>>>>>> 73d193b96d554fc5e08e782e35c6ce3cda867831
)
