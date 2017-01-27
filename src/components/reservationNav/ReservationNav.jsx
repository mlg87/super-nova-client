import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const renderButton = (handler, side, label) => {
  return typeof handler === 'string' ?
  <Link
    to={handler}
    style={{
      float: side,
      marginTop: '10px'
    }}
    >
    <RaisedButton
      label={label}
      primary={true}
    />
  </Link> :
  <RaisedButton
    onClick={handler}
    label={label}
    primary={true}
    style={{marginTop: '10px'}}
  />

}

const ReservationNav = (props) => {
  const {
    back,
    backLabel,
    next,
    nextLabel,
    nextCondition
  } = props

  return (
    <div>
      {back ? renderButton(back, 'left', backLabel || 'Back')  : ''}

      {next && nextCondition !== false ? renderButton(next, 'right', nextLabel || 'Next') : ''}
    </div>
  )
}

export default ReservationNav
