import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { colors } from 'config/colors'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Clear from 'material-ui/svg-icons/content/clear'
import Landscape from 'material-ui/svg-icons/image/landscape'
import TagFaces from 'material-ui/svg-icons/image/tag-faces'
import EventNote from 'material-ui/svg-icons/notification/event-note'
import Group from 'material-ui/svg-icons/social/group'
import { userLogoutCall } from 'actions/users'

class Nav extends Component {
  constructor() {
    super()
    // this does not need to go into the redux store bc it is purely
    // for UI
    this.state = {
      isBrandHovered: false,
      isDropdownOpen: false
    }
  }

  render() {
    const { userLogoutCall } = this.props
    const { isBrandHovered, isDropdownOpen } = this.state

    const renderNavLinks = () => {
      let links = [
        {
          path: '/reservations',
          text: 'RESERVATIONS',
          icon: () => <EventNote color={ colors.nav.inactiveText } />
        },
        {
          path: '/inventory',
          text: 'INVENTORY',
          icon: () => <Landscape color={ colors.nav.inactiveText } />
        },
        {
          path: '/customers',
          text: 'CUSTOMERS',
          icon: () => <TagFaces color={ colors.nav.inactiveText } />
        },
        {
          path: '/users',
          text: 'USERS',
          icon: () => <Group color={ colors.nav.inactiveText } />
        }
      ]

      const style_button = {
        minWidth: '100%',
        height: '60px',
        color: colors.nav.inactiveText
      }

      const style_link = {
        order: '2',
        textAlign: 'center',
        flexGrow: '1',
        width: '25%'
      }

      const style_activeLink = {
        backgroundColor: colors.nav.linkActiveAndBorder,
        display: 'block'
      }

      return links.map((link) => {
        return (
          <Link
            to={ link.path }
            key={ link.path }
            activeStyle={ style_activeLink }
            style={ style_link }
            >
            <FlatButton
              icon={ link.icon() }
              style={ style_button }
              label={ link.text }
              labelStyle={{ fontWeight: '900' }}
              />
          </Link>
        )
      })
    }

    const style_container = {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      // mockups have this at 34px, but thats too little -daddy fact
      height: '60px',
      width: '100vw',
      backgroundColor: '#ffffff',
      borderBottom: `1px solid ${colors.nav.linkActiveAndBorder}`
    }

    const style_brandContainer = {
      order: '1',
      alignSelf: 'flex-start',
      height: '60px',
      width: '60px',
      backgroundColor: colors.nav.brand,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }

    const style_brand = {
      color: '#ffffff',
      fontSize: '45px',
      fontWeight: '900'
    }

    const onEnter = () => {
      this.setState({isBrandHovered: true})
    }

    const onLeave = () => {
      if (!this.state.isDropdownOpen) {
        this.setState({isBrandHovered: false})
      }
    }

    const renderUserMenu = () => {
      const style_iconMenu = {
        display: 'block',
        width: '100%',
        bottom: '0'
      }
      // cb for selecting a li from the icon menu
      const onItemTouchTap = (e, child) => {
        const { action } = child.props

        this.setState({isDropdownOpen: false})

        if (!!action) {
          return action()
        }
      }
      // we can change this once we have more options in the icon menu, but for
      // now there is no need to loop over an arr to generate the MenuItems
      const userLogout = () => {
        return userLogoutCall()
      }

      const style_userMenu = {
        minWidth: '100%',
        height: '60px',
        color: '#ffffff'
      }

      const handleClick = () => {
        this.setState({isDropdownOpen: !isDropdownOpen})
      }

      return (
        <div onClick={ handleClick } style={{minWidth: '100%'}}>
          <IconMenu
            iconButtonElement={
              isDropdownOpen ?
              <FlatButton icon={<Clear />} style={ style_userMenu } /> : <FlatButton icon={<NavigationMenu /> } style={ style_userMenu } />
            }
            style={ style_iconMenu }
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onItemTouchTap={ onItemTouchTap }
            open={ isDropdownOpen }
            >
            <MenuItem primaryText='Logout' action={ userLogout }></MenuItem>
          </IconMenu>
        </div>
      )
    }

    return (
      <div style={ style_container }>
        <div style={ style_brandContainer } onMouseEnter={ onEnter } onMouseLeave={ onLeave }>
          { isBrandHovered ?
            renderUserMenu() :
            <span style={ style_brand }>N</span>
          }
        </div>
        { renderNavLinks() }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLogoutCall: (id) => {
    return dispatch(userLogoutCall(id))
  }
})

export default connect(null, mapDispatchToProps)(Nav)
