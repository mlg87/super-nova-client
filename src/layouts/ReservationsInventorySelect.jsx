import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from 'components/center/Center';
import InventoryList from 'components/inventoryList/InventoryList'
import TextField from 'material-ui/TextField'

import { fetchInventory } from 'actions/inventory'

const mapDispatchToProps = (dispatch) => ({
  fetchInitialInventory: () => {
    dispatch(fetchInventory(''))
  },

  handleSearchChange: (e) => {
    if (e.which === 13){
      dispatch(fetchInventory(e.target.value))
      e.target.value = ''
    }
  }
})

class ReservationsInventorySelect extends Component {
  constructor(props) {
    super(props)
    props.fetchInitialInventory()
  }

  render() {
    return (
      <Center>
        <div>
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
  null, mapDispatchToProps
)(ReservationsInventorySelect)
