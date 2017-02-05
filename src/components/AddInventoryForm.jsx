import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// button does not need to be from redux to work with form
import RaisedButton from 'material-ui/RaisedButton'
// make sure to use the TextField from the redux material-ui
import { TextField } from 'redux-form-material-ui'
import { colors } from 'config/colors'

import { fetchCategories } from 'actions/reservations'
import { fetchModels, fetchSizes } from 'actions/inventory'

const mapStateToProps = (state) => {
  return {
    categories: state.inventoryCategories,
    models: state.inventoryModels,
    sizes: state.inventorySizes,
  }
}

const renderCategories = ({
  categories
}) => {
  return categories.map((category) => {
    return (
      <li key={category.id}>
        {category.name}
      </li>
    )
}) }

const renderModels = ({
  models
}) => {
  return models.map((model) => {
    return (
      <li key={model.id}>
        {model.name}
      </li>
    )
  })
}

const renderSizes = ({
  sizes
}) => {
  return sizes.map((sizes) => {
    return (
      <li key={sizes.id}>
        {sizes.size}
      </li>
    )
  })
}


class AddInventoryForm extends Component {
  constructor(props) {
    super(props)
    if (!props.categories.length) {
      props.fetchCategories()
    }
    if (!props.models.length) {
      props.fetchModels()
    }
    if (!props.sizes.length) {
      props.fetchSizes(3)
    }
  }


  render() {
    return (
      <div>
        <h1>Add Those Invs</h1>
        {renderCategories(this.props)}
        {renderModels(this.props)}
        {renderSizes(this.props)}
      </div>
    )
  }

}

export default connect(
  mapStateToProps,
  {
    fetchCategories,
    fetchModels,
    fetchSizes
  }
)(AddInventoryForm)
