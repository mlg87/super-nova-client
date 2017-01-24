import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'

const listStyle = {
  position: 'absolute',
  top: 0
}

const mapStateToProps = (state) => ({
  items: state.reservationSelectedInventory
})

const renderItems = (items) => {
  return items.map((item) => {
    return (
      <ListItem
        key={item.uuid}
        primaryText={item.model}
        leftAvatar={<Avatar src={item.image_url} />}
      />
    )
  })
}

const SelectedInventoryList = ({ items }) => {
  return (
    <List style={listStyle}>
      { items.length ? <Subheader>Selected Gear</Subheader> : ''}
      { renderItems(items) }
    </List>
  )
}

export default connect(
  mapStateToProps, null
)(SelectedInventoryList)
