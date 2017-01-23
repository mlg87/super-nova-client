import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import { connect } from 'react-redux'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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
        {props.inventory.map((tile) => (
          <GridTile
            key={tile.item_id}
            title={`${tile.brand} ${tile.model}`}
            subtitle={<span><b>{tile.type}</b></span>}
            >
            <img src={tile.image_url} alt='Category icon'/>
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}

export default connect(
  mapStateToProps
)(InventoryList)
