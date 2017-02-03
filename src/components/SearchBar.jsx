import React from 'react'
import IconSearch from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { updateSearchTerms } from 'actions/reservations'

const mapStateToProps = (state) => ({
  searchTerms: state.inventorySearchTerms
})

const mapDispatchToProps = (dispatch, state) => ({
  handleSearchChange: (e, searchTerms) => {
    const val = e.target.value
    // obviously, user needs more feedback
    // don't allow duplicates, don't allow more than 8?
    if (e.which === 13 && searchTerms.length < 8 && !searchTerms.filter((term) => term === val).length) {
      dispatch(updateSearchTerms('add', val))
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
        onKeyUp={(e) => props.handleSearchChange(e, props.searchTerms)}
        style={styles.searchBar}
        inputStyle={styles.inputStyle}
        underlineStyle={styles.underline}
        />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
