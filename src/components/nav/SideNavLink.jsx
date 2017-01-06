import React, { Component } from 'react'
import { Link } from 'react-router'
import { colors } from '../../colors'

export class SideNavLink extends Component {
  render() {
    const sideNavLinkStyle = {
      backgroundColor: 'white',
      borderRadius: '100%',
      height: '40px',
      width: '40px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '10px',
      marginBottom: '10px'
    }

    return (
      <li>
        <div  style={ sideNavLinkStyle }>
          <Link to={ this.props.path }>{ this.props.text }</Link>
        </div>
      </li>
    )
  }
}
