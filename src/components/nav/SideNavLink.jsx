import React, { Component } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'
import { colors } from '../../colors'

export class SideNavLink extends Component {
  render() {
    const wrapperStyle = {
      width: '100%',
      paddingTop: '10px',
      paddingBottom: '10px',
      ':hover': {
        backgroundColor: colors.sideNavActiveLink
      }
    }

    const sideNavLinkStyle = {
      backgroundColor: 'white',
      borderRadius: '100%',
      height: '40px',
      width: '40px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    return (
      <li key={ this.props.path + 'Link'}>
        <div key={ this.props.path + 'DivWrapper' } style={ wrapperStyle }>
          <div key={ this.props.path + 'LinkWrapper'}  style={ sideNavLinkStyle }>
            <Link to={ this.props.path }>{ this.props.text }</Link>
          </div>

        </div>
      </li>
    )
  }
}

// wrap the link in Radium
SideNavLink = Radium(SideNavLink)
