import React from 'react'
import Chip from 'material-ui/Chip'
import { connect } from 'react-redux'
import { updateSearchTerms } from 'actions/reservations'
import SearchBar from 'components/SearchBar'
import CategoryFilters from 'components/CategoryFilters'

const styles = {
  container: {
    width: '100%',
    height: '94px',
    'padding': '20px 47px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)'
  },
}

const mapStateToProps = (state) => ({
  searchTerms: state.inventorySearchTerms,
})

const mapDispatchToProps = (dispatch) => ({
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
      <SearchBar />
      <CategoryFilters />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(InventorySearch)
