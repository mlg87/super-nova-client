import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task'


const Todo = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {task: 'Make a todo component'},
        {task: 'How about we get some weather?'},
        {task: 'Checkout brunch'},
      ]
    }
  },

  handleSubmit: function(e) {
    e.preventDefault()
    let newTask = ReactDOM.findDOMNode(this.refs.task).value
    let updatedTodos = this.state.todos
    updatedTodos.push({task: newTask})
    this.setState({todos: updatedTodos})
    ReactDOM.findDOMNode(this.refs.task).value = ""
  },

  handleRemoveClick: function(task) {
    console.log(task);
    let todos = this.state.todos;
    let updatedTodos = todos.filter(function(todo){
      if (todo.task !== task) {
        return todo
      }
    })
    this.setState({todos: updatedTodos})
  },

  render: function() {
    let tasks = this.state.todos.map((todo, i) => {
      return <Task task={todo.task} key={i} onRemoveClick={this.handleRemoveClick}/>
    })

    return(
      <div className='row valign-wrapper'>
        <div className='col s4 center-block'>
          <h3>Tasks</h3>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input ref='task' type='text' name='task'></input>
              <button type='submit'>Add</button>
            </form>
          </div>
          <div>
            <ul>{tasks}</ul>
          </div>
        </div>
      </div>)
  }


})




export default Todo;
