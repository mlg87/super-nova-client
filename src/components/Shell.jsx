import React from 'react'
import Nav from 'components/Nav'

const Shell = (props) => {
  const { children } = props

  const containerStyle = {
    // nav is 60px high
    height: 'calc(100vh - 60px)',
    position: 'relative'
  }

  return (
    <div>
      <Nav />
      <div className="container" style={ containerStyle }>
        { children }
      </div>
    </div>
  )
}

export default Shell
