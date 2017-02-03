import React from 'react'
import Chip from 'material-ui/Chip'
import { connect } from 'react-redux'
import { updateSearchTerms } from 'actions/reservations'
import SearchBar from 'components/SearchBar'
import CategoryFilters from 'components/CategoryFilters'
import XIcon from 'material-ui/svg-icons/content/clear'

const styles = {
  container: {
    padding: '20px 47px',
    position: 'relative',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)'
  },
  chipsContainer: {
    position: 'absolute',
    right: '47px',
    left: '60%',
    top: '20px',
    bottom: '20px'
  },
  chip: {
    margin: 4,
    width: '120px',
    height: '32px',
    borderRadius: '2px',
    backgroundColor: 'rgba(153, 153, 153, 0.4)',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12)',
    cursor: 'pointer',
    float: 'left'
  },
  chipLabel: {
    fontSize: '12px',
    width: '120px',
    textAlign: 'center'
  },
  xIcon: {
    position: 'absolute',
    left: '9px',
    top: '9px',
    color: 'white',
    width: '14px',
    height: '14px',
  }
}

const mapStateToProps = (state) => ({
  searchTerms: state.inventorySearchTerms
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
        style={styles.chip}
        labelStyle={styles.chipLabel}
        onClick={() => removeSearchTerm(searchTerm)}
      >
        <XIcon style={styles.xIcon}/>
        {searchTerm}
      </Chip>
    )
  })
}

const InventorySearch = (props) => {
  return (
    <div style={styles.container}>
      <SearchBar />
      <CategoryFilters />
      <div style={styles.chipsContainer}>
        {renderSearchTerms(props)}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(InventorySearch)
