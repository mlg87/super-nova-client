import React, { Component } from 'react'
// components
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import { Link } from 'react-router'
import Add from 'material-ui/svg-icons/content/add'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Search from 'material-ui/svg-icons/action/search'
// appearance
import Radium from 'radium'
import { colors } from 'config/colors'

export class InventoryLayout extends Component {
  render() {
    const searchBarStyle = {
      backgroundColor: 'white',
      width: '100%',
      borderBottom: '1px solid ' + colors.utils.border.gray
    }

    const searchInputStyle = {
      marginLeft: '10px',
      width: '100%'
    }

    const renderSubNavLinks = () => {
      let links = [
        {
          path: '/inventory/add',
          text: 'ADD',
          icon: () => <Add color={ colors.nav.inactiveText } />
        }
      ]

      // if (usersSelected.length > 0) {
      //   links.push({
      //     path: '/users/remove',
      //     text: 'REMOVE SELECTED',
      //     icon: () => <Clear color={ colors.nav.inactiveText } />
      //   })
      // }

      const style_button = {
        height: '90%',
        color: colors.nav.inactiveText
      }

      return links.map((link) => {
        return (
          <Link to={ link.path } key={ link.path }>
            <FlatButton
              icon={ link.icon() }
              style={ style_button }
              label={ link.text }
              />
          </Link>
        )
      })
    }

    const style_subNav = {
      height: '60px',
      borderBottom: `1px solid ${colors.nav.linkActiveAndBorder}`,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
      paddingRight: '20px'
    }


    return (
      <div>
        <div style={ style_subNav }>
          { renderSubNavLinks() }
        </div>
        <Toolbar style={ searchBarStyle }>
          <ToolbarGroup style={ {width: '100%'} }>
            <Search />
            <TextField hintText='Search' style={ searchInputStyle } underlineShow={ false } />
          </ToolbarGroup>
        </Toolbar>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

InventoryLayout = Radium(InventoryLayout)
