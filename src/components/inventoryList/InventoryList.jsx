import React, { Component } from 'react'
import {GridList, GridTile} from 'material-ui/GridList'
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

const tilesData = [
  {
    id: 1,
    brand: 'Eddyline',
    model: 'Aura',
    type: 'kayak',
    img: 'https://www.rei.com/media/product/894562'
  },
  {
    id: 2,
    brand: 'La Sportiva',
    model: 'Miura',
    type: 'climbing shoe',
    img: 'https://www.rei.com/media/product/894562'
  },

]

const mapStateToProps = (state) => ({
  inventory: state.inventory
})

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: (searchTerm) => {
    fetch('/api/inventory', {
      method: 'get',
    })
    .then((res) => {
      res.json().then( (json) => {
        console.log(json);
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
          {tilesData.map((tile) => (
            <GridTile
              key={tile.id}
              title={`${tile.brand} ${tile.model}`}
              subtitle={<span><b>{tile.type}</b></span>}
              >
              <img src={tile.img} alt='Category icon'/>
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
