import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  currentPath: state.routing.locationBeforeTransitions.pathname
})

// const renderButton = (handler, side, label) => {
//   return typeof handler === 'string' ?
//   <Link
//     to={handler}
//     style={{
//       float: side
//     }}
//     >
//     <RaisedButton
//       label={label}
//       primary={true}
//     />
//   </Link> :
//   <RaisedButton
//     onClick={handler}
//     label={label}
//     primary={true}
//     style={{float: side}}
//   />
//
// }

const styles = {
  button: {
    width: '86px',
   height: '23.3px',
   borderRadius: '100px',
   boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)'
  },
  label: {
    fontSize: '10px',
    fontWeight: 'bold',
    textTransform: 'none'
  }
}

const getNextPath = (currentPath) => {
  switch (currentPath) {
    case 'reservations/select-date':
      return 'reservations/select-inventory'
    default:
      return ''
  }
}

const ReservationNav = (props) => {
  const nextPath = getNextPath(props.currentPath)

  return (
    <div>
      <Link
        to={nextPath}
        >
        <RaisedButton
          buttonStyle={styles.button}
          style={styles.button}
          labelStyle={styles.label}
          label='Next'
        />
      </Link>
    </div>
  )
}

export default connect(
  mapStateToProps
)(ReservationNav)
