import React, { Component } from 'react'
import { connect } from 'react-redux'
import InventoryList from 'components/InventoryList'
import InventorySearch from 'components/InventorySearch'
import { inventoryGet } from 'actions/inventory'
import SelectedInventoryList from 'components/SelectedInventoryList'

const mapStateToProps = (state) => ({
  selectedInventory: state.reservationSelectedInventory
})

const mapDispatchToProps = (dispatch) => ({
  fetchInitialInventory: () => {
    dispatch(inventoryGet())
  }
})

export class ReservationInventorySelect extends Component {
  constructor(props) {
    super(props)
    props.fetchInitialInventory()
  }

  render() {
    return (
      // give space to selected list
      <div style={{
          height: 'calc(100% - 102px)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <InventorySearch />

        <InventoryList />

        <div style={{
          position: 'absolute',
          bottom: '47px',
          left: '0',
          right: '0',
          height: '100px',
          background: '#4e4e4e',

        }}>
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
