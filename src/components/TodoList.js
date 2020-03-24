import React from "react";
import TodoAdder from "./TodoAdder";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 0, title: "Homework" },
        { id: 1, title: "Clean Up" }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newTodo) {
    this.add(newTodo);
  }

  add(newTodo) {
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  }

  remove(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  onDelete = id => {
    this.remove(id);
  };

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.state.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={this.onDelete} />
          ))}
        </ul>
        <TodoAdder onAdd={this.handleAdd} />
      </div>
    );
  }
}
