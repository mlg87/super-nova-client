import React from 'react'
import TextField from 'material-ui/TextField'
import Chip from 'material-ui/Chip'
import { connect } from 'react-redux'
import { updateSearchTerms } from 'actions/reservations'
import IconSearch from 'material-ui/svg-icons/action/search'

const styles = {
  container: {
    width: '100%',
    height: '94px',
    'padding': '20px 47px'
  },
  searchContainer: {
    position: 'relative',
    left: '40px'
  },
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
  }
}

const mapStateToProps = (state) => ({
  searchTerms: state.inventorySearchTerms,
})

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (e) => {
    if (e.which === 13){
      dispatch(updateSearchTerms('add', e.target.value))
      // this does not bring back the placeholder text, tough...
      e.target.value = ''
    }
  },

  removeSearchTerm: (searchTerm) => {
    dispatch(updateSearchTerms('remove', searchTerm))
  }
})

const renderSearchTerms = ({searchTerms, removeSearchTerm}) => {
  return searchTerms.map((searchTerm) => {
    return (
      <Chip
        key={searchTerm}
        style={{margin: 4}}
        onRequestDelete={() => removeSearchTerm(searchTerm)}
      >
        {searchTerm}
      </Chip>
    )
  })
}

const InventorySearch = (props) => {
  return (
    <div style={styles.container}>
      <div style={{display: 'flex'}}>
        {renderSearchTerms(props)}
      </div>
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
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(InventorySearch)
