import React from 'react'

export const NotFound = () => {
  const containerStyle = {
    width: '60%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  return (
    <div style={ containerStyle }>
      <h3>404! There is not a page at this route... yet</h3>
    </div>
  )
}
