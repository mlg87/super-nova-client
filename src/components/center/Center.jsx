import React, { Component } from 'react'

export class Center extends Component {
  render() {
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
        {this.props.children}
      </div>
    )
  }
}
