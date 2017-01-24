import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import RemoveItem from 'material-ui/svg-icons/content/clear'
import { removeInventoryFromReservation } from 'actions/inventory'

const listStyle = {
  position: 'absolute',
  top: 0
}

const mapStateToProps = (state) => ({
  items: state.reservationSelectedInventory
})

// const mapDispatchToProps = (dispatch) => ({
//   removeInventoryFromReservation: dispatch(removeInventoryFromReservation)
// })

const renderItems = ({ items, removeInventoryFromReservation }) => {
  return items.map((item) => {
    return (
      <ListItem
        key={item.uuid}
        primaryText={item.model}
        leftAvatar={<Avatar src={item.image_url} />}

        rightIcon={<RemoveItem onClick={() => removeInventoryFromReservation(item.uuid)}/>}
      />
    )
  })
}

const SelectedInventoryList = (props) => {
  return (
    <List style={listStyle}>
      { props.items.length ? <Subheader>Selected Gear</Subheader> : ''}
      { renderItems(props) }
    </List>
  )
}

export default connect(
  mapStateToProps, { removeInventoryFromReservation }
)(SelectedInventoryList)
