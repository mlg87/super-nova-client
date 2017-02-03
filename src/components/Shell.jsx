import React from 'react'
import Nav from 'components/Nav'
import HorizontalNav from 'components/HorizontalNav'

const Shell = (props) => {
  const { children } = props
  const { route } = props.children.props

  const containerStyle = {
    // sum of sideNav and subSideNav widths
    // marginLeft: (route.isSubSideNavOpen ? '360px' : '80px'),
    height: '100vh',
    position: 'relative'
  }

  return (
    <div>
      <HorizontalNav routeProps={ route } />
      <div className="container" style={ containerStyle }>
        { children }
      </div>
    </div>
  )
}

export default Shell

// <Nav routeProps={ route } />
