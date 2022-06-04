import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {



  render() {
    return (
    <>
    <h1>ToDo List</h1>
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem 
          key={todo.id} 
          todo={todo} 
          handleCheckBoxChange = {this.props.handleCheckBoxChange}
          handleDeleteButton={this.props.handleDeleteButton}
          setUpdate = {this.props.setUpdate}/>
        ))}
      </ul>
    </>    
    )
  }
}

export default TodosList