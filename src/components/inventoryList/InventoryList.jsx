import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import { connect } from 'react-redux'
import { setInventory } from 'actions'

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

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: (searchTerm) => {
    fetch('/api/inventory/search', {
      method: 'get',
    })
    .then((res) => {
      res.json().then( (json) => {
        dispatch(setInventory(json))
      })
    })
    .catch((err) => {console.log('fetch err:', err);})
  }
})

export class InventoryList extends Component {
  constructor(props) {
    super(props)
    props.fetchInventory('')
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
          >
          {this.props.inventory.map((tile) => (
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryList)
