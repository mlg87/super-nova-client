import React, { Component } from 'react'
// routing
import { Link } from 'react-router'
// components
import { SubSideNav } from 'components/nav/SubSideNav'
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'
// appearance
import Radium from 'radium'
import { colors } from 'config/colors'
// side nav button icons
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
        <Link
          to={ link.path }
          key={ link.path }
          activeStyle={ activeStyle }
        >
          <FlatButton
            icon={ link.icon() }
            style={ buttonStyle }
            hoverColor={ colors.blue }
          />
        </Link>
      )
    })

  }

  render() {
    const routeProps = this.props.routeProps

    const sideNavStyle = {
      width: '80px',
      backgroundColor: colors.sideNav.background,

      linkContainer: {
        marginTop: '80px'
      }
    }

    // this needs to always be defined bc otherwise the
    // subSideNav will not have the sliding effect (only
    // works if it is already rendered on the dom)
    const subSideNavStyle = {
      marginLeft: (routeProps.isSubSideNavOpen ? '80px' : '0'),
      backgroundColor: colors.subSideNav.background,
      width: '280px',
      // boxShadow: 'none',
      zIndex: '2'
      // display: (this.props.isSubSideNavOpen ? 'block' : 'none')
    }

    // this needs to be defined but an empty string as
    // to not throw errs
    let subSideNavHeader = null
    let subSideNavLinks = null
    let subSideNavPath = null
    if (routeProps.subSideNavHeader && routeProps.subSideNavLinks) {
      subSideNavHeader = routeProps.subSideNavHeader
      subSideNavLinks = routeProps.subSideNavLinks
      subSideNavPath = routeProps.path
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
          // this will not display when a child of the other Drawer
        */}
        <Drawer
          containerStyle={ subSideNavStyle }
          open={ routeProps.isSubSideNavOpen }
        >
        { routeProps.isSubSideNavOpen &&
          <SubSideNav
            header={ subSideNavHeader }
            links={ subSideNavLinks }
            path={ subSideNavPath }
          />
        }
        </Drawer>
      </div>
    )
  }

}

Nav = Radium(Nav)
