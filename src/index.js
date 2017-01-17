import React from 'react'
import { AppRouter } from 'bin/router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducers } from 'reducers'

// just some styles for the boys
import 'override.css';


const store = createStore(reducers)

render(
  <Provider store={store}>
    {AppRouter}
  </Provider>
  , document.getElementById('root')
)

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({type: 'SET_RESERVATION_START_DATE', date: new Date('2000-02-02')})
store.dispatch({type: 'SET_RESERVATION_START_DATE', date: new Date('1984-02-28')})
store.dispatch({type: 'SET_RESERVATION_END_DATE', date: new Date('1984-05-28')})
