import React, { Component } from 'react'
import { connect } from 'react-redux'
import Center from 'components/center/Center';
import InventoryList from 'components/inventoryList/InventoryList'
import InventorySearch from 'components/inventorySearch/InventorySearch'
import { fetchInventory } from 'actions/reservations'
import ReservationNav from 'components/reservationNav/ReservationNav'
import SelectedInventoryList from 'components/selectedInventoryList/SelectedInventoryList'

const mapStateToProps = (state) => ({
  selectedInventory: state.reservationSelectedInventory
})

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
              next='/reservations/select-customer'
              nextCondition={!!this.props.selectedInventory.length}
            />
          </div>
        </Center>

        <div style={{position: 'absolute', top: 0}}>
          <SelectedInventoryList />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationsInventorySelect)
