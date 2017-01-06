import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { SideNavLink } from './SideNavLink'
import { colors } from '../../colors'

export class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mason: 'awesome'
    }
  }

  // TODO: render different links based on user login status
  renderNavLinks() {
    let links = [
      {
        path: '/login',
        text: 'Login'
      },
      {
        path: '/register',
        text: 'Register'
      }
    ]

    return links.map((link) => {
      return <SideNavLink path={ link.path } text={ link.text } />
    })

  }

  render() {
    const logoStyle = {
      marginLeft: '10px'
    }

    const sideNavStyle = {
      backgroundColor: colors.sideNavBackground,
      width: '80px'
    }

    const subSideNavStyle = {
      backgroundColor: colors.subSideNavBackground,
      // offset bc of the other sidenav
      left: '80px',
      width: '360px'
    }

    return (
      <div>
        <ul className='side-nav fixed' style={ sideNavStyle }>
          { this.renderNavLinks() }
        </ul>
        <ul className='side-nav fixed' style={ subSideNavStyle }>
          <li>test</li>
        </ul>
      </div>
    )
  }

}

// <nav>
//   <div className='nav-wrapper'>
//     <Link to='/' className='brand-logo' style={ logoStyle }>SuperNova</Link>
//     <ul className='right hide-on-med-and-down'>
//       { this.renderNavLinks() }
//     </ul>
//   </div>
// </nav>
