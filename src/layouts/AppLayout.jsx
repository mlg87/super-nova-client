import React from 'react'
import { Nav } from '../components/nav/Nav'

// ok for this to be stateless
const AppLayout = ({children}) => {
  return (
    <div>
      <Nav />
      <div className="container">
        { children }
      </div>
    </div>
  )
}

export default AppLayout
