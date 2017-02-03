import React from 'react'
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux'
import { addInventoryToReservation } from 'actions/reservations'

const styles = {
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    flexGrow: '2',
    alignItems: 'center'
  },
  listItem: {
    cursor: 'pointer',
    width: '200px',
    height: '250px',
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: '100%',
    height: '100%'
  }
};

const mapStateToProps = (state) => ({
  inventory: state.inventory || []
})

export const InventoryList = (props) => {
  return (
    <List
      style={styles.list}
      cols={4}
      >
      {props.inventory.map((item) => (
        <ListItem
          key={item.item_id}
          style={styles.listItem}
          onClick={() => props.addInventoryToReservation(item)}
        >
          <img
            src={item.image_url}
            alt='Category icon'
            style={styles.img}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default connect(
  mapStateToProps,
  { addInventoryToReservation }
)(InventoryList)
