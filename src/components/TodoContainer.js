import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import {v4 as uuidv4} from "uuid"

class TodoContainer extends React.Component {

    state = {
        todos: [],
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos);
            localStorage.setItem("todos",temp);
        }
    }

    componentDidMount() {
       const temp = JSON.parse(localStorage.getItem("todos"));
       if(temp){
           this.setState({
               todos: temp,
           })
       }
      }
    
    handleCheckBox = id => {
        this.setState(prevState => {
            return {
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                return {
                    ...todo,
                    completed : !todo.completed
                }
              }
              return todo
            }),
          }})
    };

    delTodo = id => {
        this.setState({
            todos:[
                ...this.state.todos.filter(todo=>{
                        return todo.id !== id;
                    }
                )
            ]
        }
        )   
    }

    addTodoItem = title => {
        const newItem = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos,newItem]
        })
    }

    setUpdate = (updateTile,id) => {
        this.setState({
            todos:this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.title = updateTile;
                }
                return todo
            }                
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="inner">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodosList 
                todos={this.state.todos} 
                handleCheckBoxChange ={this.handleCheckBox} 
                handleDeleteButton={this.delTodo}
                setUpdate = {this.setUpdate}
                />
                </div>
            </div>
        );
    }
}
export default TodoContainer