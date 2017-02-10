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
  card: {
    border: '2px solid #eee'
  },
  availability: {
    backgroundColor: '#eee',
    fontSize: '9px',
    padding: '4px 15px',
    margin: '0'
  },
  img: {
    backgroundSize: 'cover',
    width: '170px',
    height: '170px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    margin: '10px 5px'
  },
  itemTitle: {
    height: '60px',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '15px 15px 0',
  },
  subTitle: {
    fontSize: '12px',
    marginTop: '-13px',
    paddingLeft: '15px'
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
          hoverColor='white'
          onClick={() => props.addInventoryToReservation(item)}
        >
          <div style={styles.card}>
            <p style={styles.availability}>4/12 AVAILABLE</p>
            <div
              style={{
                ...styles.img,
                backgroundImage: `url(${item.image_url})`
              }}
            >
            </div>
            <div style={styles.itemTitle}>
              <p style={styles.title}>{`${item.brand} ${item.model}`}</p>
              <p style={styles.subTitle}>{item.type}</p>
            </div>
          </div>
        </ListItem>
      ))}
    </List>
  )
}

export default connect(
  mapStateToProps,
  { addInventoryToReservation }
)(InventoryList)
