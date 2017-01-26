import React from 'react'
import moment from 'moment'
import { format } from 'bin/helpers'

const CustomerDetails = (props) => {
  const { ...c } = props.customer
  return (
    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
      <li>{c.first_name} {c.last_name}</li>
      <li>{c.type}</li>
      <li>{c.email}</li>
      <li>{c.student_id}</li>
      <li>{format('phoneNumber', c.phone_number)}</li>
      <li>{c.street}, {c.city} {c.state} {c.zip_code}</li>
      {
        c.birth_date &&
        <li>Birthdate: {moment(c.birth_date).format('MM/DD/YYYY')}</li>
      }
      {
        c.last_reservation &&
        <li>Last Reservation: {moment(c.last_reservation).format('MM/DD/YYYY h:mma')}</li>
      }
    </ul>
  )
}

export default CustomerDetails
