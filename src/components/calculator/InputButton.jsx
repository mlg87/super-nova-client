import React from 'react';

const InputButton = React.createClass({
  render: function () {
    let style = {
      float: 'left',
      margin: '1px'
    }
    return <button
      style={style}
      className={this.props.className}
      onClick={this.props.onClick}
      value={this.props.value}>
        {this.props.text}
      </button>
  }
});

export default InputButton;
