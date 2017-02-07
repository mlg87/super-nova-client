import React from 'react'
import { connect } from 'react-redux'
import { colors } from 'config/colors'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import Search from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'

const style_searchBar = {
  backgroundColor: 'white',
  width: '100%',
  borderBottom: '1px solid ' + colors.utils.border.gray
}

const style_searchInput = {
  marginLeft: '10px',
  width: '100%',
  color: colors.nav.inactiveText
}

const HeaderSearch = (props) => {
  const { handleChange } = props

  return (
    <Toolbar style={ style_searchBar }>
      <ToolbarGroup style={ {width: '100%'} }>
        <Search color={ colors.nav.inactiveText } />
        <TextField
          hintText='Search'
          style={ style_searchInput }
          underlineShow={ false }
          onChange={ handleChange }
          />
      </ToolbarGroup>
    </Toolbar>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { handleChange } = ownProps
  return {
    handleChange: (e, searchTerm) => {
      return dispatch(handleChange(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch)
