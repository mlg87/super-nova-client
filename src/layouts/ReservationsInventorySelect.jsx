import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from 'components/center/Center';
import InventoryList from 'components/inventoryList/InventoryList'
import InventorySearch from 'components/inventorySearch/InventorySearch'
import { fetchInventory } from 'actions/inventory'
import ReservationNav from 'components/reservationNav/ReservationNav'

const mapDispatchToProps = (dispatch) => ({
  fetchInitialInventory: () => {
    dispatch(fetchInventory(''))
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
          <InventorySearch />

          <InventoryList />

          <ReservationNav
            back='/reservations/select-date'
            next='/reservations/select-user'
          />
        </div>
      </Center>
    )
  }
}

export default connect(
  null, mapDispatchToProps
)(ReservationsInventorySelect)
