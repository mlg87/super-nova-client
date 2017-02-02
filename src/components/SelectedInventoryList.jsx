import React from 'react'
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import RemoveItemIcon from 'material-ui/svg-icons/content/clear'
import { removeInventoryFromReservation } from 'actions/reservations'
import Radium from 'radium'

const mapStateToProps = (state) => ({
  items: state.reservationSelectedInventory
})

const renderItems = ({ items, removeInventoryFromReservation }) => {
  return items.map((item) => {
    return (
      <ListItem
        key={item.uuid}
        primaryText={item.model}
        secondaryText={item.brand}
        leftAvatar={<Avatar src={item.image_url} />}
        style={{
          color: 'white',
          marginLeft: '20px'
        }}
      />
    )
  })
}
// rightIcon={<RemoveItem onClick={() => removeInventoryFromReservation(item.uuid)}/>}

const SelectedInventoryList = (props) => {
  return (
    <List style={{
      display: 'flex',
      flexDirection: 'row',
      padding: '0',
      alignItems: 'center',
      height: '100%'
    }}>
      { renderItems(props) }
    </List>
  )
}

export default Radium(connect(
  mapStateToProps, { removeInventoryFromReservation }
)(SelectedInventoryList))
