import React from "react";

class TodoItem extends React.Component{ 
        render(){
            return  <li> 
            <input type="checkbox" 
            checked={this.props.todo.completed}
            onChange={() => this.props.handleCheckBoxChange(this.props.todo.id)}
            /> 
            {this.props.todo.title}
            <button onClick={() => this.props.handleDeleteButton(this.props.todo.id)}>Delete</button>
            </li>
        }
    }

export default TodoItem;