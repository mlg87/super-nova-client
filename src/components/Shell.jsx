import React from 'react'
import HorizontalNav from 'components/HorizontalNav'

const Shell = (props) => {
  const { children } = props
  const { route } = props.children.props

  const containerStyle = {
    // nav is 60px high
    height: 'calc(100vh - 60px)',
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
