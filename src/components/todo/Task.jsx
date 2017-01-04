import React from 'react';


const Task = React.createClass({

  handleClick: function(){
    this.props.onRemoveClick(this.props.task)
  },

  render: function(){
    return <li className='row'>
      {this.props.task}
      <button className="right" onClick={this.handleClick}>remove</button>
    </li>
  }
})


export default Task;
