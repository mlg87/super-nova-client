import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
// components
import { FullPageForm } from '../../layouts/FullPageForm'
// appearance
import Radium from 'radium'

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  // TODO: change this out to work with FullPageForm
  handleSubmit(e) {
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
      res.json().then( json => console.log(json))
    })
    .catch((err) => {console.log('fetch err', err);})

    ReactDOM.findDOMNode(this.refs.username).value = ""
    ReactDOM.findDOMNode(this.refs.password).value = ""
  }

  getInputs() {
    return [
      {
        value: this.state.username,
        type: 'text',
        placeholder: 'username',
        onChange: (e) => this.setState({username: e.target.value})
      },
      {
        value: this.state.password,
        type: 'password',
        placeholder: 'password',
        onChange: (e) => this.setState({password: e.target.value})
      }
    ]
  }

  render() {
    const containerStyle = {
      width: '50%',
      marginTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    return(
      <div style={ containerStyle }>
        <FullPageForm
          header='Login'
          onSubmit={ this.onSubmit }
          inputs={ this.getInputs() }
        />
      </div>
    )
  }
}

Login = Radium(Login)
