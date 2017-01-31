import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from 'actions/reservations'

const mapStateToProps = (state) => ({
  categories: state.inventoryCategories
})

const renderCategories = (categories) => {
  return categories.map((category) => {
    <li key={category.id}>
      {category.name}
    </li>
  })
}

class CategoryFilters extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    props.fetchCategories()
  }

  render() {
    return (
      <ul>
        {renderCategories(this.props.categories)}
      </ul>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchCategories }
)(CategoryFilters)
