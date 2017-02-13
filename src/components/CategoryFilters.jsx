import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterByCategory } from 'actions/reservations'
import { categoriesGet } from 'actions/inventory'
import FlatButton from 'material-ui/FlatButton'

const mapStateToProps = (state) => ({
  categories: state.inventory.categories,
  selectedCategoryId: state.selectedCategoryId
})

const renderCategories = ({
  categories,
  filterByCategory,
  selectedCategoryId
}) => {
  return categories.map((category) => {
    return (
      <li
        key={category.id}
        style={{display: 'inline', marginRight: '10px'}}
      >
        <FlatButton
          label={category.name}
          labelStyle={{
            fontSize: '14px',
            textTransform: 'none',
            fontWeight: 'bold'
          }}
          onClick={() => filterByCategory(category.id)}
          backgroundColor={selectedCategoryId === category.id ? '#eee' : 'white'}
        />
      </li>
    )
  })
}

class CategoryFilters extends Component {
  constructor(props) {
    super(props)
    if (!props.categories.length) {
      props.categoriesGet()
    }
  }

  render() {
    return (
      <ul style={{
          margin: '0 0 -6px 0',
          padding: '2px 0 0 20px'
        }}>
        {renderCategories(this.props)}
      </ul>
    )
  }
}

export default connect(
  mapStateToProps,
  { categoriesGet, filterByCategory }
)(CategoryFilters)
