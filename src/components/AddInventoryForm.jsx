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
import {
  categoriesGet,
  modelsGet,
  sizesGet,
  itemTypesGet,
  inventoryPost
} from 'actions/inventory'

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
  }

  componentWillMount() {
    const {
      categories,
      categoriesGet
    } = this.props

    if (!categories.length) {
      categoriesGet()
    }
  }

  componentWillUpdate({
    categoryId,
    itemTypeId,
    itemTypesGet,
    modelsGet,
    sizesGet,
  }) {
    if (categoryId) {
      itemTypesGet(categoryId)
    }
    if (itemTypeId) {
      sizesGet(itemTypeId)
      modelsGet(itemTypeId)
    }
  }

  render() {
    const {
      categories,
      categoryId,
      itemTypes,
      itemTypeId,
      models,
      modelId,
      sizes,
      sizeId,
      inventoryPost
    } = this.props

    const handleSubmit = (e) => {
      e.preventDefault()
      let newInventory = {
        model_id: modelId,
        size_id: sizeId,
        description: 'brand new inventory item'
      }
      console.log('submit', newInventory);
      inventoryPost(newInventory)
    }


    return (
      <div>
        <h1>Add That Inventory</h1>
        <form onSubmit={ handleSubmit } style={{minWidth: '100%'}}>
          <SelectInput name={'category'} items={categories} textKey={'name'}/>
          {categoryId &&
            itemTypes.length > 0 &&
            <SelectInput name={'itemType'} items={itemTypes} textKey={'name'}/>
          }
          {itemTypeId &&
            models.length > 0 &&
            <SelectInput name={'model'} items={models} textKey={'name'}/>
          }
          {itemTypeId &&
            sizes.length > 0 &&
            <SelectInput name={'size'} items={sizes} textKey={'size'}/>

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

const mapStateToProps = (state) => {
  return {
    categories: state.inventory.categories,
    models: state.inventory.models,
    sizes: state.inventory.sizes,
    itemTypes: state.inventory.itemTypes,
    form: state.formReducer,
    categoryId: selector(state, 'category'),
    itemTypeId: selector(state, 'itemType'),
    sizeId: selector(state, 'size'),
    modelId: selector(state, 'model')
  }
}

export default connect(
  mapStateToProps,
  {
    categoriesGet,
    modelsGet,
    sizesGet,
    itemTypesGet,
    inventoryPost,
  }
)(AddInventoryForm)


// when you select a category,
// show model tiles,
// when you select a model,
// show size selector,
// when size is selected show confirm button
