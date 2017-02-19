import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import Snackbar from 'material-ui/Snackbar'
import AddInventoryForm from './AddInventoryForm'
import { onRequestClose } from 'actions/inventory'

const AddInventoryDialog = (props) => {
  const { err, onRequestClose } = props
  const { returnPath } = props.route

  const containerStyle = {
    width: '50%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  const errSnackBarStyle = {
    backgroundColor: 'red'
  }

  const errSnackBarContentStyle = {
    color: 'white'
  }


  return (
    <div style={ containerStyle }>
      <Dialog
        open={ true }
        title='Add Inventory'
      >
        <AddInventoryForm returnPath={ returnPath } />
      </Dialog>
      <Snackbar
        open={ !!err }
        message={ !!err ? err : ''}
        autoHideDuration={ 4000 }
        bodyStyle={ errSnackBarStyle }
        contentStyle={ errSnackBarContentStyle }
        onRequestClose={ onRequestClose }
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    err: state.inventory.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestClose
  }
}


export default connect(mapStateToProps, {onRequestClose})(AddInventoryDialog)
