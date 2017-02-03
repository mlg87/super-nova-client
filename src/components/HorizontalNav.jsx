import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { colors } from 'config/colors'
import FlatButton from 'material-ui/FlatButton'
import Landscape from 'material-ui/svg-icons/image/landscape'
import TagFaces from 'material-ui/svg-icons/image/tag-faces'
import EventNote from 'material-ui/svg-icons/notification/event-note'
import Group from 'material-ui/svg-icons/social/group'
import { userLogoutCall } from 'actions/users'

const HorizontalNav = (props) => {
  const { routeProps, userLogoutCall, userId } = props

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

  const style_brand = {
    order: '1',
    alignSelf: 'flex-start',
    height: '60px',
    width: '60px',
    backgroundColor: colors.nav.brand,
    color: '#ffffff',
    fontSize: '45px',
    fontWeight: '900',
    textAlign: 'center'
  }

  return (
    <div style={ style_container }>
      <div style={ style_brand }>
        N
      </div>
      { renderNavLinks() }
    </div>
  )
}

const mapStateToProps = state => ({
  // REVIEW: might not need to do this as we should be able to get the
  // state in the middleware
  userId: state.userId
})

const mapDispatchToProps = dispatch => ({
  userLogoutCall: (id) => {
    return dispatch(userLogoutCall(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalNav)
