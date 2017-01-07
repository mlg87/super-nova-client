import React, { Component } from 'react'
// routing
import { Link } from 'react-router'
// components
import { SubSideNav } from './SubSideNav'
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'
// appearance
import Radium from 'radium'
import { colors } from '../../colors'
// side nav button icons
// icon: login
import Person from 'material-ui/svg-icons/social/person'
// icon: register
import PersonAdd from 'material-ui/svg-icons/social/person-add'
// icon: WESTWORLD
import TrackChanges from 'material-ui/svg-icons/action/track-changes'
// icon: inventory
import Landscape from 'material-ui/svg-icons/image/landscape'
// icon: customers
import TagFaces from 'material-ui/svg-icons/image/tag-faces'
// icon: reservations
import EventNote from 'material-ui/svg-icons/notification/event-note'
// icon: users
import Group from 'material-ui/svg-icons/social/group'

export class Nav extends Component {
  renderNavLinks() {
    let links = [
      {
        path: '/login',
        icon: () => <Person />
      },
      {
        path: '/register',
        icon: () => <PersonAdd />
      },
      {
        path: '/inventory',
        icon: () => <Landscape />
      },
      {
        path: '/customers',
        icon: () => <TagFaces />
      },
      {
        path: '/reservations',
        icon: () => <EventNote />
      },
      {
        path: '/users',
        icon: () => <Group />
      }
    ]

    const activeStyle = {
      backgroundColor: colors.sideNav.activeLink,
      display: 'block'
    }

    const buttonStyle = {
      minWidth: '100%',
      height: '80px',
      color: 'white'
    }

    return links.map((link) => {
      return (
        <Link to={ link.path } key={ link.path } activeStyle={ activeStyle }>
          <FlatButton icon={ link.icon() } style={ buttonStyle }/>
        </Link>
      )
    })

  }

  render() {
    const sideNavStyle = {
      width: '80px',
      backgroundColor: colors.sideNav.background,

      linkContainer: {
        marginTop: '80px'
      }
    }

    const subSideNavStyle = {
      marginLeft: '80px',
      backgroundColor: colors.subSideNav.background,
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
        {/*
          // this will not display when inside the other Drawer
        */}
        <Drawer containerStyle={ subSideNavStyle }>
          <SubSideNav header='Test Header'/>
        </Drawer>
      </div>
    )
  }

}

Nav = Radium(Nav)
