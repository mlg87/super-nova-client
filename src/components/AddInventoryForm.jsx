import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector, Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import SelectInput from './SelectInput'
import { colors } from 'config/colors'

import {
  categoriesGet,
  modelsGet,
  sizesGet,
  itemTypesGet
} from 'actions/inventory'

class AddInventoryForm extends Component {
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

  renderDescriptionInput() {
    const {
      itemTypeId,
      models,
      modelId,
      sizes,
      sizeId
    } = this.props

    const style_floatingLabelShrink = {
      color: colors.blue
    }

    const style_underlineFocus = {
      borderColor: colors.blue
    }

    const descriptionInput = (
      <Field
        name='description'
        component={ TextField }
        floatingLabelText='description'
        floatingLabelShrinkStyle={ style_floatingLabelShrink }
        underlineFocusStyle={ style_underlineFocus }
        fullWidth={ true }
        multiLine={ true }
        rowsMax={ 4 }
      />
    )
    if (itemTypeId) {
      if (sizes.length && models.length) {
        if (sizeId && modelId) {
          return descriptionInput
        }
      } else if (models.length) {
        if (modelId) {
          return descriptionInput
        }
      } else {
        return descriptionInput
      }
    }
  }


  render() {
    const {
      categories,
      categoryId,
      itemTypes,
      itemTypeId,
      models,
      sizes,
      returnPath,
      handleSubmit
    } = this.props

    const style_buttonContainer = {
      float: 'right',
      marginTop: '20px'
    }

    return (
      <div>
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
          {
            this.renderDescriptionInput()
          }
          <div style={ style_buttonContainer }>
            <Link to={ returnPath }>
              <RaisedButton
                label='Cancel'
                style={{ marginRight: '10px' }}
              />
            </Link>
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
    itemTypesGet
  }
)(AddInventoryForm)
