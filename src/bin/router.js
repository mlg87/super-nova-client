import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// the subSideNav links are in another file so this isnt
// super cluttered
import { subSideNavLinks } from 'config/subSideNavLinks'

// main layout (includes nav and where other layouts go)
import AppLayout from 'layouts/AppLayout'
import { UnderConstruction } from 'layouts/UnderConstruction'
import { NotFound } from 'layouts/NotFound'
import { InventoryLayout } from 'layouts/InventoryLayout'
import { LandingLayout } from 'layouts/LandingLayout'
import { UsersLayout } from 'layouts/UsersLayout'
import Reservation from 'layouts/Reservation'
import ReservationDateSelect from 'components/reservationDateSelect/ReservationDateSelect'
import ReservationInventorySelect from 'components/reservationInventorySelect/ReservationInventorySelect'
import ReservationCustomerSelect from 'components/reservationCustomerSelect/ReservationCustomerSelect'
import ReservationReview from 'components/reservationReview/ReservationReview'
import Register from 'components/register/Register'
import { CurrentUser } from 'components/currentUser/CurrentUser'


export const AppRouter = (
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
