import React, { Component } from 'react'
// components
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import TextField from 'material-ui/TextField'
import Search from 'material-ui/svg-icons/action/search'
// appearance
import Radium from 'radium'
import { colors } from '../colors'

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

    return (
      <div>
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
