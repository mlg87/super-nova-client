import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
// components
import RaisedButton from 'material-ui/RaisedButton'

// appearance
import Radium from 'radium'

export class CurrentUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      userId: '',
    }
  }

  handleClick() {

    console.log(this.setState);
    let token = localStorage.getItem('token')
    fetch('/auth/current_user', {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then((res) => {
      res.json().then( (json) => {
        let data = json.data
        this.setState({
          username: data.username,
          userId: data.id
        })
      })
    })
    .catch((err) => {console.log('fetch err:', err);})
  }

  render() {
    const containerStyle = {
      width: '50%',
      marginTop: '50px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    let userInfo = null;
    if (this.state.username) {
      userInfo = <div>
        <h3>Username: {this.state.username}</h3>
        <h3>User Id: {this.state.userId}</h3>
      </div>
    }

    return (
      <div style={containerStyle}>
        <RaisedButton onClick={ this.handleClick.bind(this) }>Get Current User</RaisedButton>
        { userInfo }
      </div>
    )
  }

};
