import React from 'react'
import { connect } from 'react-redux'
// routing
import { Link } from 'react-router'
// components
import SubSideNav from 'components/SubSideNav'
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
// appearance
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
import { userLogoutCall } from 'actions/users'


const buttonStyle = {
  minWidth: '100%',
  height: '80px',
  color: 'white'
}

const Nav = (props) => {
  const { routeProps, userLogoutCall, userId } = props

  const renderNavLinks = () => {
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
        path: '/reservations/select-date',
        icon: () => <EventNote />
      },
      {
        path: '/users',
        icon: () => <Group />
      }
    ]

    const style_activeLink = {
      backgroundColor: colors.sideNav.activeLink,
      display: 'block'
    }

    return links.map((link) => {
      return (
        <Link
          to={ link.path }
          key={ link.path }
          activeStyle={ style_activeLink }
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

  const renderUserMenu = () => {
    const style_iconMenu = {
      display: 'block',
      position: 'fixed',
      width: '100%',
      bottom: '0'
    }
    // cb for selecting a li from the icon menu
    const onItemTouchTap = (e, child) => {
      const { action } = child.props

      if (!!action) {
        return action()
      }
    }
    // we can change this once we have more options in the icon menu, but for
    // now there is no need to loop over an arr to generate the MenuItems
    const userLogout = () => {
      return userLogoutCall(userId)
    }

    return (
      <IconMenu
        iconButtonElement={<FlatButton icon={<NavigationMenu />} style={ buttonStyle } hoverColor={ colors.blue } />}
        style={ style_iconMenu }
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onItemTouchTap={ onItemTouchTap }
        >
        <MenuItem primaryText='Logout' action={ userLogout }></MenuItem>
      </IconMenu>
    )
  }

  const style_sideNav = {
    width: '80px',
    backgroundColor: colors.sideNav.background,

    linkContainer: {
      marginTop: '80px'
    }
  }
  // this needs to always be defined bc otherwise the
  // subSideNav will not have the sliding effect (only
  // works if it is already rendered on the dom)
  const style_subSideNav = {
    marginLeft: (routeProps.isSubSideNavOpen ? '80px' : '0'),
    backgroundColor: colors.subSideNav.background,
    width: '280px',
    zIndex: '2'
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
      <Drawer containerStyle={ style_sideNav }>
        <div style={ style_sideNav.linkContainer }>
          { renderNavLinks() }
          { renderUserMenu() }
        </div>
      </Drawer>
      {/*
        // this will not display when a child of the other Drawer
      */}
      <Drawer
        containerStyle={ style_subSideNav }
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

const mapStateToProps = (state, ownProps) => ({
  userId: state.userId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  userLogoutCall: (id) => {
    return dispatch(userLogoutCall(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
