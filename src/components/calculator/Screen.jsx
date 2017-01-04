import React from 'react';

const Screen = React.createClass({
  render: function () {
    return <input value={this.props.userInput} onChange={this.props.onScreenChange}/>
  }
});

export default Screen;
