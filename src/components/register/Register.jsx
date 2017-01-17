import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
// components
import { FullPageForm } from 'layouts/FullPageForm'
import Snackbar from 'material-ui/Snackbar'
// appearance
// import Radium from 'radium'


export class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      password_confirm: '',
      isOpen: false,
      errMsg: ''
    }

    console.log('what are props', props);
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
      },
      {
        value: this.state.password_confirm,
        type: 'password',
        placeholder: 'Confirm Password',
        onChange: (e) => this.setState({password_confirm: e.target.value})
      }
    ]
  }

  // todo, change submit to be dispatch to middleware
  handleSubmit() {
    const user = {
      username: this.state.username,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    }

    if (user.password !== user.password_confirm) {
      this.setState({
        isOpen: true,
        errMsg: 'Passwords do not match'
      })
      return false
    }

    // let data = new FormData(JSON.stringify({user}));
    // data.append('json', JSON.stringify({user}));

    fetch('/api/auth/register', {
      method: 'post',
      credentials: 'include', //pass cookies, for authentication
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then((res) => {
      res.json().then( json => {
        console.log('fetch res:', json);
        localStorage.setItem('token', json.token);
      })
    })
    .catch((err) => {console.log('fetch err:', err);})

    this.setState({
      username: '',
      password: '',
      password_confirm: ''
    })
  }

  resetSnackBar() {
    this.setState({
      isOpen: false,
      errMsg: ''
    })
  }


  render() {
    const containerStyle = {
      width: '50%',
      marginTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    const errSnackBarStyle = {
      backgroundColor: 'red'
    }

    const errSnackBarContentStyle = {
      color: 'white'
    }

    return (
      <div style={ containerStyle }>
        <FullPageForm
          header='Register a New User'
          onSubmit={ this.handleSubmit.bind(this) }
          inputs={ this.getInputs() }
        />
        <Snackbar
          open={ this.state.isOpen }
          message={ this.state.errMsg }
          autoHideDuration={ 4000 }
          bodyStyle={ errSnackBarStyle }
          contentStyle={ errSnackBarContentStyle }
          onRequestClose={ this.resetSnackBar.bind(this) }
        />
      </div>
    )
  }
}

// Register = Radium(Register)

//
//
//
// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'
//
// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter))
//   }
// })
//
// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)
//
// export default FilterLink
