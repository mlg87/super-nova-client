import React from 'react'
import { connect } from 'react-redux'
// routing
import { Link } from 'react-router'
// components
import MenuItem from 'material-ui/MenuItem'

const SubSideNav = (props) => {
  const renderLinks = (links) => {
    const activeStyle = {
      backgroundColor: 'black',
      textDecoration: 'none'
    }

    const linkStyle = {
      color: 'white'
    }

    return links.map((link) => {
      if (link.renderCondition) {
        if (!link.renderCondition(props)) {
          return false
        }
      }
      return (
        <Link to={ link.path } activeStyle={ activeStyle } key={ link.path }>
          <MenuItem style={ linkStyle }>
            { link.text }
          </MenuItem>
        </Link>
      )
    })
  }

  const { links, header, path } = props

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
      <Link to={ path }>
        <h2 style={ headerStyle }>{ header }</h2>
      </Link>
      <ul style={ linkListStyle }>
        { renderLinks(links) }
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  usersSelected: state.usersSelected
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SubSideNav)
