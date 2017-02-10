import React from 'react'
import moment from 'moment'

const InfoDateSelected = (props) => {
  return (
    <div style={props.style}>
      <span
        style={{
          fontSize: '20px'
        }}
      >
        {moment(props.date).format('DD')}
      </span>

      <span
        style={{
          fontSize: '10px',
          marginLeft: '5px',
          position: 'relative',
          top: '-3px'
        }}
      >
        {moment(props.date).format('MMM')}
      </span>

    </div>
  )
}

export default InfoDateSelected
