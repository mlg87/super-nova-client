import React, { Component } from 'react'
// routing
import { Link } from 'react-router'
// components
import MenuItem from 'material-ui/MenuItem'
// appearance
import Radium from 'radium'
import { colors } from '../../colors'

export class SubSideNav extends Component {
  renderLinks() {
    let links = [
      {
        path: '/test',
        text: 'Test'
      },
      {
        path: '/test2',
        text: 'Test2'
      }
    ]

    const activeStyle = {
      backgroundColor: 'black',
      textDecoration: 'none'
    }

    const linkStyle = {
      color: 'white'
    }

    return links.map((link) => {
      return (
        <Link to={ link.path } activeStyle={ activeStyle }>
          <MenuItem style={ linkStyle }>
            { link.text }
          </MenuItem>
        </Link>
      )
    })
  }

  render() {
    const containerStyle = {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20px',
      color: 'white'
    }

    const headerStyle = {
      marginLeft: '20px',
      fontWeight: '100'
    }

    const linkListStyle = {
      padding: '0'
    }

    return (
      <div style={ containerStyle }>
        <h2 style={ headerStyle }>{ this.props.header }</h2>
        <ul style={ linkListStyle }>
          { this.renderLinks() }
        </ul>
      </div>
    )
  }
}

SubSideNav = Radium(SubSideNav)
