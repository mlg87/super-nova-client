import React from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const ReservationNav = (props) => {
  return (
    <div>
      {props.back ?
        <Link
          to={props.back}
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

      {props.next ?
        <Link
          to={props.next}
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
