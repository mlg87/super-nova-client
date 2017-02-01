import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import RemoveItem from 'material-ui/svg-icons/content/clear'
import { removeInventoryFromReservation } from 'actions/reservations'

const mapStateToProps = (state) => ({
  items: state.reservationSelectedInventory
})

const renderItems = ({ items, removeInventoryFromReservation }) => {
  return items.map((item) => {
    return (
      <ListItem
        key={item.uuid}
        primaryText={item.model}
        leftAvatar={<Avatar src={item.image_url} />}
        style={{color: 'white', marginLeft: '20px'}}
      />
    )
  })
}
// secondaryText={item.brand}
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

export default connect(
  mapStateToProps, { removeInventoryFromReservation }
)(SelectedInventoryList)
