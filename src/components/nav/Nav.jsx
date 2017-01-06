import React, { Component } from 'react'
// routing
import { Link } from 'react-router'
// components
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
// appearance
import Radium from 'radium'
import { colors } from '../../colors'
import Person from 'material-ui/svg-icons/social/person'
import PersonAdd from 'material-ui/svg-icons/social/person-add'

export class Nav extends Component {
  renderNavLinks() {
    const iconWrapperStyle = {
      margin: 'auto',
      height: '40px',
      width: '40px',
      backgroundColor: 'white',
      borderRadius: '100%'
    }
    // icons are svgs
    const iconStyle = {
      marginLeft: '10px',
      marginTop: '10px'
    }

    let links = [
      {
        path: '/login',
        icon: () => {
          return (
            <div style={ iconWrapperStyle }>
              <Person style={ iconStyle }/>
            </div>
          )
        }
      },
      {
        path: '/register',
        icon: () => {
          return (
            <div style={ iconWrapperStyle }>
              <PersonAdd style={ iconStyle }/>
            </div>
          )
        }
      }
    ]

    const activeStyle = {
      backgroundColor: colors.sideNavActiveLink,
      display: 'block'
    }

    const menuItemStyle = {
      paddingTop: '10px',
      paddingBottom: '10px',
      backgroundColor: 'inherit'
    }

    return links.map((link) => {
      return (
        <Link to={ link.path } key={ link.path } activeStyle={ activeStyle }>
          <MenuItem style={ menuItemStyle }>
            { link.icon() }
          </MenuItem>
        </Link>
      )
    })

  }

  render() {
    const sideNavStyle = {
      width: '80px',
      backgroundColor: colors.sideNavBackground,

      linkContainer: {
        marginTop: '80px'
      }
    }

    const subSideNavStyle = {
      marginLeft: '80px',
      backgroundColor: colors.subSideNavBackground,
      width: '280px',
      boxShadow: 'none'
    }

    return (
      <div>
        {/*
          // drawer is docked by default
          // style will not work on Drawer, must use containerStyle
        */}
        <Drawer containerStyle={ sideNavStyle }>
          <div style={ sideNavStyle.linkContainer }>
            { this.renderNavLinks() }
          </div>
        </Drawer>
        <Drawer containerStyle={ subSideNavStyle }>
          <div>test</div>
        </Drawer>
      </div>
    )
  }

}

Nav = Radium(Nav)
