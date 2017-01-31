import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from 'actions/reservations'
import FlatButton from 'material-ui/FlatButton'

const mapStateToProps = (state) => ({
  categories: state.inventoryCategories
})

const renderCategories = (categories) => {
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
          hoverColor='white'
        />
      </li>
    )
  })
}

class CategoryFilters extends Component {
  constructor(props) {
    super(props)
    if (!props.categories.length) {
      props.fetchCategories()
    }
  }

  render() {
    return (
      <ul style={{
          margin: '0 0 -6px 0',
          padding: '2px 0 0 20px'
        }}>
        {renderCategories(this.props.categories)}
      </ul>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchCategories }
)(CategoryFilters)
