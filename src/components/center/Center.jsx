import React from 'react'

const Center = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      }}
    >
      {props.children}
    </div>
  )
}

export default Center
