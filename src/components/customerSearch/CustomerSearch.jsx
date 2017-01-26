import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { fetchCustomers } from 'actions/reservations'

const mapDispatchToProps = (dispatch) => ({
  fetchCustomers: (e, searchTerm) => {
    dispatch(fetchCustomers(searchTerm))
  }
})

const CustomerSearch = (props) => {
  return (
    <div>
      <TextField
        name='customers-search'
        hintText='search name, email or phone number'
        fullWidth={true}
        onChange={props.fetchCustomers}
      />
    </div>
  )
}

export default connect(
  null, mapDispatchToProps
)(CustomerSearch)
