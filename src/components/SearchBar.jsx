import React from 'react'
import IconSearch from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { updateSearchTerms } from 'actions/reservations'

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (e) => {
    if (e.which === 13){
      dispatch(updateSearchTerms('add', e.target.value))
      // this does not bring back the placeholder text, tough...
      e.target.value = ''
    }
  },
})

const styles = {
  searchBar: {
    width: '50%',
    height: '43px',
    lineHeight: '43px',
  },
  underline: {
    position: 'relative',
    left: '-40px'
  },
  inputStyle: {
    position: 'relative',
    top: '-13px'
  },
  searchIcon: {
    marginRight: '10px',
    marginBottom: '5px'
  },
  searchContainer: {
    position: 'relative',
    left: '40px'
  }
}
const SearchBar = (props) => {
  return (
    <div style={styles.searchContainer}>
      <IconSearch style={styles.searchIcon}/>
      <TextField
        name='inventory-search'
        hintText='Search'
        fullWidth={true}
        onKeyUp={props.handleSearchChange}
        style={styles.searchBar}
        inputStyle={styles.inputStyle}
        underlineStyle={styles.underline}
        />
    </div>
  )
}

export default connect(null, mapDispatchToProps)(SearchBar)
