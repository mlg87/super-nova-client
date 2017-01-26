import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const ReservationNav = (props) => {
  const {
    back,
    next,
    nextCondition
  } = props

  return (
    <div>
      {back ?
        <Link
          to={back}
          style={{
            float: 'left',
            marginTop: '10px'
          }}
        >
          <RaisedButton
            label='Back'
            primary={true}
            />
        </Link>
      : ''}

      {next && nextCondition !== false ?
        <Link
          to={next}
          style={{
            float: 'right',
            marginTop: '10px'
          }}
        >
          <RaisedButton
            label='Next'
            primary={true}
            />
        </Link>
      : ''}
    </div>
  )
}

export default ReservationNav
