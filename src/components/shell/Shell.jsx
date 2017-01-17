import React, { Component } from 'react'
import { Nav } from 'components/nav/Nav'

export class Shell extends Component {
  render() {
    const routeProps = this.props.children.props.route

    const containerStyle = {
      // sum of sideNav and subSideNav widths
      marginLeft: (routeProps.isSubSideNavOpen ? '360px' : '80px'),
      height: '100vh'
    }

    return (
      <div>
        <Nav routeProps={ routeProps } />
        <div className="container" style={ containerStyle }>
          { this.props.children }
        </div>
      </div>
    )
  }
}
