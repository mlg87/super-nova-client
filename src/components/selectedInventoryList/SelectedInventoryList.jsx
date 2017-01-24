import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'

const mapStateToProps = (state) => {
  selectedInventoryItems: state.selectedInventoryItems
}

const renderItems = (items) => {
  return items.map((item) => {
    return (
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
      />
    )
  })
}

const SelectedInventoryList = (props) => {
  return (
    <List style={{float: 'right'}}>
      <Subheader>Selected Gear</Subheader>
      { renderItems(props.selectedInventoryItems) }
    </List>
  )
}

export default connect(
  mapStateToProps, null
)(SelectedInventoryList)
