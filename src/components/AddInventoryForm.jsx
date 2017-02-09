import React, { Component } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// button does not need to be from redux to work with form
import RaisedButton from 'material-ui/RaisedButton'
// make sure to use the TextField from the redux material-ui
import {
  TextField,
  SelectField,
} from 'redux-form-material-ui'
import MenuItem from 'material-ui/MenuItem'
import { colors } from 'config/colors'

import { fetchCategories } from 'actions/reservations'
import { modelsGet, fetchSizes, fetchItemTypes } from 'actions/inventory'

const style_floatingLabelShrink = {
  color: colors.blue
}

const style_underlineFocus = {
  borderColor: colors.blue
}

const style_buttonContainer = {
  float: 'right',
  marginTop: '20px'
}

const SelectInput = (props) => {
  return <Field
    name={ props.name }
    component={ SelectField }
    floatingLabelText={ props.name }
    floatingLabelShrinkStyle={ style_floatingLabelShrink }
    underlineFocusStyle={ style_underlineFocus }
    fullWidth={ true }
    onChange={ props.onChange }
    >
    {props.items.map((item) => {
      return <MenuItem
        key={item.id}
        value={item.id}
        primaryText={item[props.textKey]}
      />
    })}
  </Field>
}

class AddInventoryForm extends Component {
  constructor(props) {
    super(props)
    if (!props.categories.length) {
      props.fetchCategories()
    }
  }

  componentWillUpdate({
    selectedCategory,
    itemTypeId,
    fetchItemTypes,
    modelsGet,
    fetchSizes,
  }) {
    if (selectedCategory) {
      fetchItemTypes(selectedCategory)
    }
    if (itemTypeId) {
      fetchSizes(itemTypeId)
      modelsGet(itemTypeId)
    }
  }

  handleItemTypeChange(props) {
    console.log('handle it', props);
  }

  render() {

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('submit');
    }
    return (
      <div>
        <h1>Add That Inventory</h1>
        <form onSubmit={ handleSubmit } style={{minWidth: '100%'}}>
          <SelectInput name={'category'} items={this.props.categories} textKey={'name'}/>
          {this.props.selectedCategory &&
            this.props.itemTypes &&
            <SelectInput name={'itemType'} items={this.props.itemTypes} textKey={'name'}/>
          }
          {this.props.itemTypeId &&
            this.props.models &&
            <SelectInput name={'models'} items={this.props.models} textKey={'name'}/>
          }
          {this.props.itemTypeId &&
            this.props.sizes &&
            <SelectInput name={'sizes'} items={this.props.sizes} textKey={'size'}/>

          }
          <div style={ style_buttonContainer }>
            <RaisedButton
              label='Cancel'
              style={{ marginRight: '10px' }}
              onClick={() => {console.log('CLEAR THE FORM')}}
              />
            <RaisedButton
              label='Submit'
              type='submit'
              />
          </div>
        </form>
      </div>
    )
  }

}

AddInventoryForm = reduxForm({
  form: 'addInventoryForm'
})(AddInventoryForm)

const selector = formValueSelector('addInventoryForm')

// do we need form in state??
const mapStateToProps = (state) => {
  return {
    categories: state.inventoryCategories,
    models: state.inventory.models,
    sizes: state.inventorySizes,
    itemTypes: state.inventoryItemTypes,
    form: state.formReducer,
    selectedCategory: selector(state, 'category'),
    itemTypeId: selector(state, 'itemType'),
    selectedModel: selector(state, 'model')
  }
}

export default connect(
  mapStateToProps,
  {
    fetchCategories,
    modelsGet,
    fetchSizes,
    fetchItemTypes,
  }
)(AddInventoryForm)


// when you select a category,
// show model tiles,
// when you select a model,
// show size selector,
// when size is selected show confirm button
