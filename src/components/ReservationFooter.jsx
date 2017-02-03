import React from 'react'
import { connect } from 'react-redux'
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import { push } from 'react-router-redux'
import InfoDateSelected from 'components/InfoDateSelected'

// an easy way to map between the steps and the paths
const indexToStepMap = [
  '/reservations/select-date',
  '/reservations/select-inventory',
  '/reservations/select-customer',
  '/reservations/review'
]

const styles = {
  footer: {
    width: '100%',
    height: '45px',
    backgroundColor: '#4e4e4e',
    position: 'fixed',
    bottom: 0,
    color: '#858585',
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    fontWeight: '300',
    margin: '0',
    marginLeft: '45px',
  },
  rightSide: {
    marginLeft: 'auto',
    marginRight: '45px'
  },
  button: {
    width: '86px',
    height: '23.3px',
    borderRadius: '100px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)'
  },
  buttonLabel: {
    fontSize: '10px',
    fontWeight: 'bold',
    textTransform: 'none'
  },
  stepper: {
    margin: '0 60px 0 25px'
  }
}

const mapStateToProps = (state) => ({
  startDate: state.reservationStartDate,
  endDate: state.reservationEndDate,
  inventory: state.reservationSelectedInventory,
  customer: state.reservationSelectedCustomer,
  currentPath: state.routing.locationBeforeTransitions.pathname
})

const mapDispatchToProps = (dispatch) => ({
  goBackToStep: (step) => {
    dispatch(push(indexToStepMap[step]))
  }
})

const handleStepClick = (i, stepIndex, goBackToStep) => {
  // we only allow to go back
  if (i < stepIndex) {
    goBackToStep(i)
  }
}

const renderSteps = (stepIndex, goBackToStep) => {
  return [0, 1, 2, 3].map((i) => {
    return (
      <Step key={i} onClick={() => handleStepClick(i, stepIndex, goBackToStep)}>
        <StepLabel></StepLabel>
      </Step>
    )
  })
}

const isScreenFulfilled = (stepIndex, {
  startDate,
  endDate,
  inventory,
  customer
}) => {
  switch (stepIndex) {
    case 0:
      return startDate && endDate
    case 1:
      return inventory.length
    case 2:
      return customer.id
    default:
      return true
  }
}

const ReservationFooter = (props) => {
  const stepIndex = indexToStepMap.findIndex(path => props.currentPath === path)
  const disableNext = !isScreenFulfilled(stepIndex, props)
  return (
    <footer style={styles.footer}>
      <h4 style={styles.header}>My Reservation</h4>

      <Stepper
        activeStep={stepIndex}
        connector={null}
        style={styles.stepper}
      >
        {renderSteps(stepIndex, props.goBackToStep)}
      </Stepper>

      <InfoDateSelected
        date={props.startDate}
        style={{marginRight: '35px'}}
      />

      <InfoDateSelected
        date={props.endDate}
        style={{
          paddingRight: '35px',
          borderRight: '1px solid #858585'
        }}
      />

      <div style={styles.rightSide}>
        <Link
          to={indexToStepMap[stepIndex + 1]}
          style={disableNext ? {pointerEvents: 'none'} : {}}
          >
          <RaisedButton
            buttonStyle={styles.button}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            label='Next'
            disabled={disableNext}
          />
        </Link>
      </div>
    </footer>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationFooter)
