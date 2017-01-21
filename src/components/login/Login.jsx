import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch';
// components
import { Form } from 'components/form/Form'
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

  componentWillMount() {
    console.log('MOUNTING LOGIN (PROPS)', this.props);
  }

  // no need to e.preventDefault b/c event is on button onClick
  // not form onSubmit (button type)
  handleSubmit() {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    let data = new FormData(JSON.stringify({user}));
    data.append('json', JSON.stringify({user}));

    fetch('/api/auth/login', {
      method: 'post',
      credentials: 'include', //pass cookies, for authentication
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then((res) => {
      // not catching an err
      res.json().then( json => {
        localStorage.setItem('token', json.token)
        // HACK: router.go method comes from parent, we use
        // it here to navigate the user to their desired path
        // after a successful login
        this.props.routeGo(this.props.desiredRoute)
      })
    })
    .catch((err) => {
      console.log('fetch err', err)
      return false
    })

    this.setState({
      username: '',
      password: ''
    })
  }

  getInputs() {
    return [
      {
        value: this.state.username,
        type: 'text',
        placeholder: 'Username',
        onChange: (e) => this.setState({username: e.target.value})
      },
      {
        value: this.state.password,
        type: 'password',
        placeholder: 'Password',
        onChange: (e) => this.setState({password: e.target.value})
      }
    ]
  }

  render() {
    const containerStyle = {
      width: '30%',
      marginTop: '100px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    return(
      <div style={ containerStyle }>
        WE NEED TO MAKE THIS AGAIN
      </div>
    )
  }
}

Login = Radium(Login)
