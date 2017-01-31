import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import { connect } from 'react-redux'
import { addInventoryToReservation } from 'actions/reservations'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // this is just for development, until we style this
    position: 'relative',
    top: '40px'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const mapStateToProps = (state) => ({
  inventory: state.inventory || []
})

export const InventoryList = (props) => {
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
        >
        {props.inventory.map((item) => (
          <GridTile
            key={item.item_id}
            title={`${item.brand} ${item.model}`}
            subtitle={<span><b>{item.type}</b></span>}
            style={{cursor: 'pointer'}}
            onClick={() => props.addInventoryToReservation(item)}
          >
            <img src={item.image_url} alt='Category icon'/>
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}

export default connect(
  mapStateToProps,
  { addInventoryToReservation }
)(InventoryList)
