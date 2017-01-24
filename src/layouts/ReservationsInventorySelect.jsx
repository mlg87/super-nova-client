import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Center } from 'components/center/Center';
import InventoryList from 'components/inventoryList/InventoryList'
import InventorySearch from 'components/inventorySearch/InventorySearch'
import { fetchInventory } from 'actions/inventory'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

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

          <Link
            to='/reservations/select-date'
            style={{
              float: 'left',
              marginTop: '10px'
            }}
          >
            <RaisedButton
              label='Back'
              primary={true}
            />
          </Link>

          <Link
            to='/reservations/select-user'
            style={{
              float: 'right',
              marginTop: '10px'
            }}
          >
            <RaisedButton
              label='Next'
              primary={true}
            />
          </Link>
        </div>
      </Center>
    )
  }
}

export default connect(
  null, mapDispatchToProps
)(ReservationsInventorySelect)
