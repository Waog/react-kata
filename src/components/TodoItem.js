import React from "react";
import "./TodoItem.css";

export default class TodoItem extends React.Component {
  render() {
    return (
      <li className="todo-item">
        {this.props.todo.title}
        <button
          className="todo-content"
          onClick={() => this.props.onDelete(this.props.todo.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
