import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from 'components/center/Center';
import InventoryList from 'components/inventoryList/InventoryList'
import TextField from 'material-ui/TextField'
import Chip from 'material-ui/Chip'
import { updateSearchTerms, fetchInventory } from 'actions/inventory'

const mapStateToProps = (state) => ({
  searchTerms: state.inventorySearchTerms,
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialInventory: () => {
    dispatch(fetchInventory(''))
  },

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

class ReservationsInventorySelect extends Component {
  constructor(props) {
    super(props)
    props.fetchInitialInventory()
  }

  renderSearchTerms() {
    return this.props.searchTerms.map((searchTerm) => {
      return (
        <Chip
          key={searchTerm}
          style={{margin: 4}}
          onRequestDelete={() => this.props.removeSearchTerm(searchTerm)}
        >
          {searchTerm}
        </Chip>
      )
    })
  }

  render() {
    return (
      <Center>
        <div>
          <div style={{display: 'flex'}}>
            {this.renderSearchTerms()}
          </div>
          <TextField
            name='inventory-search'
            hintText='search for inventory'
            onKeyUp={this.props.handleSearchChange}
            />
          <InventoryList />
        </div>
      </Center>
    )
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ReservationsInventorySelect)
