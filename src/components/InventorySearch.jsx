import React from 'react'
import TextField from 'material-ui/TextField'
import Chip from 'material-ui/Chip'
import { connect } from 'react-redux'
import { updateSearchTerms } from 'actions/reservations'

const styles = {
  container: {
    width: '100%',
    height: '94px',
    'padding': '0 47px'
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
      <TextField
        name='inventory-search'
        hintText='search for inventory'
        fullWidth={true}
        onKeyUp={props.handleSearchChange}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(InventorySearch)
