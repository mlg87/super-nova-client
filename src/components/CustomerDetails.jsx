import React from 'react'
import { format } from 'lib/helpers'

// NOTE: this is very specific. We should probably change this structure in the
// future to have a formatter and a styler components
const CustomerDetails = (props) => {
  const c = props.customer
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
        <li>Birthdate: {format('date', c.birth_date)}</li>
      }
      {
        c.last_reservation &&
        <li>Last Reservation: {format('timestamp', c.last_reservation)}</li>
      }
    </ul>
  )
}

export default CustomerDetails
