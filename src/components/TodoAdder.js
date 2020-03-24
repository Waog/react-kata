import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default class TodoAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoInput: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.emitNewTodo();
    this.setState({ newTodoInput: "" });
  }

  handleNewTodoChange(event) {
    this.setState({ newTodoInput: event.target.value });
  }

  emitNewTodo() {
    const newTodo = {
      id: uuidv4(),
      title: this.state.newTodoInput
    };
    this.props.onAdd(newTodo);
  }

  render() {
    return (
      <form>
        <input
          className="todo-content"
          type="text"
          value={this.state.newTodoInput}
          onChange={this.handleNewTodoChange}
        />
        <button
          className="todo-content"
          type="submit"
          onClick={this.handleClick}
        >
          Add
        </button>
      </form>
    );
  }
}
