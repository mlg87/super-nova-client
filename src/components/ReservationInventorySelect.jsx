import React, { Component } from 'react'
import { connect } from 'react-redux'
import Center from 'components/Center';
import InventoryList from 'components/InventoryList'
import InventorySearch from 'components/InventorySearch'
import { fetchInventory } from 'actions/reservations'
import SelectedInventoryList from 'components/SelectedInventoryList'

const mapStateToProps = (state) => ({
  selectedInventory: state.reservationSelectedInventory
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialInventory: () => {
    dispatch(fetchInventory(''))
  }
})

export class ReservationInventorySelect extends Component {
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
)(ReservationInventorySelect)
