import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from 'components/center/Center';
import InventoryList from 'components/inventoryList/InventoryList'
import InventorySearch from 'components/inventorySearch/InventorySearch'
import { fetchInventory } from 'actions/inventory'
import ReservationNav from 'components/reservationNav/ReservationNav'
import SelectedInventoryList from 'components/selectedInventoryList/SelectedInventoryList'

const mapDispatchToProps = (dispatch) => ({
  fetchInitialInventory: () => {
    dispatch(fetchInventory(''))
  }
})

export class ReservationsInventorySelect extends Component {
  constructor(props) {
    super(props)
    props.fetchInitialInventory()
  }

  render() {
    return (
      <div>
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

        <SelectedInventoryList />
      </div>
    )
  }
}

export default connect(
  null, mapDispatchToProps
)(ReservationsInventorySelect)
