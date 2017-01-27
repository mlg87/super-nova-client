import React from 'react'
import Nav from 'components/nav/Nav'

const Shell = (props) => {
  const { children } = props
  const { route } = props.children.props

  const containerStyle = {
    // sum of sideNav and subSideNav widths
    marginLeft: (routeProps.isSubSideNavOpen ? '360px' : '80px'),
    height: '100vh',
    position: 'relative'
  }

  return (
    <div>
      <Nav routeProps={ route } />
      <div className="container" style={ containerStyle }>
        { children }
      </div>
    </div>
  )
}

export default Shell
