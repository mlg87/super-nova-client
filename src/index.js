import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import './index.css';
import App from './App';
import Calculator from './components/calculator/Calculator';
import Login from './components/login/Login';
import Todo from './components/todo/Todo';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/calculator' component={Calculator} />
    <Route path='/login' component={Login} />
    <Route path='/todo' component={Todo} />
  </Router>,
  document.getElementById('root')
);
