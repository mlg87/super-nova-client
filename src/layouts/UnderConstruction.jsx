import React from 'react'

export const UnderConstruction = () => {
  const containerStyle = {
    width: '60%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }

  return (
    <div style={ containerStyle }>
      <h3>This page is currently under construction. Check back soon...</h3>
    </div>
  )
}
