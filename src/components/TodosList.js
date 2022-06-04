import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
    <>
    <h1>am to do list</h1>
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem 
          key={todo.id} 
          todo={todo} 
          handleCheckBoxChange = {this.props.handleCheckBoxChange}
          handleDeleteButton={this.props.handleDeleteButton}/>
        ))}
      </ul>
    </>    
    )
  }
}

export default TodosList