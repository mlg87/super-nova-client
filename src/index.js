import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router'

import './index.css';
import App from './App';
import Calculator from './components/calculator/Calculator';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Todo from './components/todo/Todo';


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App } />
    <Route path='/calculator' component={ Calculator } />
    <Route path='/login' component={ Login } />
    <Route path='/register' component={ Register } />
    <Route path='/todo' component={ Todo } />
  </Router>,
  document.getElementById('root')
);
