import React from 'react'
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import RemoveItemIcon from 'material-ui/svg-icons/content/clear'
import {
  removeInventoryFromReservation,
  setActiveSelectedInventory
} from 'actions/reservations'

const styles = {
  listItem: {
    color: 'white',
    marginLeft: '65px',
    height: '71px',
    maxWidth: '71px',
    overflow: 'hidden',
    transition: 'max-width .3s'
  },
  activeItem: {
    maxWidth: '300px',
  },
  removeItemContainer: {
    position: 'absolute',
    borderRadius: '100%',
    top: '0',
    height: '40px',
    width: '40px',
    background: 'black',
    opacity: '.6'
  },
  removeItemIcon: {
    color: '#aaa',
    width: '40px',
    height: '40px'
  }
}

const mapStateToProps = (state) => ({
  items: state.reservationSelectedInventory
})

const renderItems = ({
  items,
  removeInventoryFromReservation,
  setActiveSelectedInventory
}) => {
  return items.map((item) => {
    return (
      <ListItem
        key={item.uuid}
        primaryText={item.model}
        secondaryText={item.brand}
        leftAvatar={
          item.active ?
            <div>
              <Avatar src={item.image_url} />
              <div
                style={styles.removeItemContainer}
                onClick={() => removeInventoryFromReservation(item.item_id)}
              >
                <RemoveItemIcon style={styles.removeItemIcon}/>
              </div>
            </div> :
            <Avatar src={item.image_url} />
        }
        style={{
          ...styles.listItem,
          ...item.active && styles.activeItem
        }}
        onClick={() =>
          item.active ? setActiveSelectedInventory(0) : setActiveSelectedInventory(item.item_id)
        }
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

export default connect(
  mapStateToProps,
  {
    removeInventoryFromReservation,
    setActiveSelectedInventory
  }
)(SelectedInventoryList)
