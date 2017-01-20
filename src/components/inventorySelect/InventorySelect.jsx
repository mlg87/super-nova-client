import React from 'react'
import {GridList, GridTile} from 'material-ui/GridList'

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

const InventorySelect = () => (
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

export default InventorySelect
