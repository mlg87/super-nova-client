import React from 'react'
import { connect } from 'react-redux'
// components
import Dialog from 'material-ui/Dialog'
import AddCustomerForm from 'components/AddCustomerForm'
import { customerAdd } from 'actions/customers'

const AddCustomers = (props) => {
  const { handleSubmit } = props
  const { returnPath } = props.route

  return (
    <Dialog
      open={ true }
      title='Add Customer'
      >
      <AddCustomerForm onSubmit={ handleSubmit } returnPath={ returnPath } />
    </Dialog>
  )
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: (values) => {
    let customer = {...values}
    return dispatch(customerAdd(customer))
  }
})

export default connect(null, mapDispatchToProps)(AddCustomers)
