import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
// create the store here so that we dont have to export from index.js
import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from 'reducers'
import thunk from 'redux-thunk'
import DevTools from 'containers/DevTools'

// the subSideNav links are in another file so this isnt
// super cluttered
import { subSideNavLinks } from 'config/subSideNavLinks'

// main layout (includes nav and where other layouts go)
import AppLayout from 'layouts/AppLayout'
// if you need a modal for under construction, import this: UnderConstructionDialog
import { UnderConstruction } from 'layouts/UnderConstruction'
import { NotFound } from 'layouts/NotFound'
import { InventoryLayout } from 'layouts/InventoryLayout'
import { LandingLayout } from 'layouts/LandingLayout'
import Reservation from 'layouts/Reservation'
import ReservationDateSelect from 'components/reservationDateSelect/ReservationDateSelect'
import ReservationInventorySelect from 'components/reservationInventorySelect/ReservationInventorySelect'
import ReservationCustomerSelect from 'components/reservationCustomerSelect/ReservationCustomerSelect'
import ReservationReview from 'components/reservationReview/ReservationReview'
import UsersLayout from 'layouts/UsersLayout'
import Register from 'components/register/Register'
import { CurrentUser } from 'components/currentUser/CurrentUser'
import RemoveUsers from 'components/removeUsers/RemoveUsers'

const middleware = routerMiddleware(browserHistory)
// export store for the Provider in index.js
export const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, middleware),
  DevTools.instrument())
)

const history = syncHistoryWithStore(browserHistory, store)

export const AppRouter = (
  <Router history={ history }>
    <Route
      path='/'
      component={ AppLayout }
    >
      <IndexRoute
        component={ LandingLayout }
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
        path='/reservations/select-date'
        component={ ReservationDateSelect }
        isSubSideNavOpen={ false }
      />
      <Route
        path='/reservations'
        component={Reservation}
        isSubSideNavOpen={ false }
      >
        <Route
          path='/reservations/select-inventory'
          component={ ReservationInventorySelect }
        />
        <Route
          path='/reservations/select-customer'
          component={ ReservationCustomerSelect }
        />
        <Route
          path='/reservations/review'
          component={ ReservationReview }
        />
      </Route>
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
          returnPath='/users'
        />
        <Route
          path='/users/remove'
          component={ RemoveUsers }
          returnPath='/users'
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
  </Router>
)
