import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';

const Register = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault()

    const user = {}
    let password_confirm = ReactDOM.findDOMNode(this.refs.password_confirm).value
    user.username = ReactDOM.findDOMNode(this.refs.username).value
    user.password = ReactDOM.findDOMNode(this.refs.password).value

    if (user.password !== password_confirm) {
      console.log('passwords don\'t match')
      // we'll handle this better in the future playerz
      return
    }

    let data = new FormData(JSON.stringify({user}));
    data.append('json', JSON.stringify({user}));

    fetch('/auth/register', {
      method: 'post',
      credentials: 'include', //pass cookies, for authentication
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then((res) => {
      res.json().then( json => console.log('fetch res:', json))
    })
    .catch((err) => {console.log('fetch err:', err);})

    ReactDOM.findDOMNode(this.refs.username).value = ""
    ReactDOM.findDOMNode(this.refs.password).value = ""
    ReactDOM.findDOMNode(this.refs.password_confirm).value = ""
  },


  render: function() {
    return(
      <div className='row valign-wrapper'>
        <div className='col s4 center-block'>
          <h3>Register</h3>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input ref='username' type='text' name='username' placeholder='username'></input>
              <input ref='password' type='text' name='password' placeholder='password'></input>
              <input ref='password_confirm' type='text' name='password_confirm' placeholder='confirm password'></input>
              <button type='submit'>Register</button>
            </form>
          </div>
        </div>
      </div>)
  }
})




export default Register;
