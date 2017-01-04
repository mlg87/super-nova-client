import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
const Login = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault()
    const user = {}
    user.username = ReactDOM.findDOMNode(this.refs.username).value
    user.password = ReactDOM.findDOMNode(this.refs.password).value
    let data = new FormData(JSON.stringify({user}));
    data.append('json', JSON.stringify({user}));

    fetch('/auth/login', {
      method: 'post',
      credentials: 'include', //pass cookies, for authentication
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then((res) => {
      console.log(res);
      res.json().then( json => console.log(json))
    })
    .catch((err) => {console.log('fetch err', err);})

    ReactDOM.findDOMNode(this.refs.username).value = ""
    ReactDOM.findDOMNode(this.refs.password).value = ""
  },


  render: function() {
    return(
      <div className='row valign-wrapper'>
        <div className='col s4 center-block'>
          <h3>Login</h3>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input ref='username' type='text' name='username' placeholder='username'></input>
              <input ref='password' type='text' name='password' placeholder='password'></input>
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>)
  }
})




export default Login;
