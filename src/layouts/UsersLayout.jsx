import React, { Component } from 'react'
import Radium from 'radium'

export class UsersLayout extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

UsersLayout = Radium(UsersLayout)
