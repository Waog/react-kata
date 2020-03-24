import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Welcome from "./components/Welcome";

class TodoList extends React.Component {
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

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.state.todos.map(todo => (
            <TodoElementFn key={todo.id} title={todo.title} />
          ))}
        </ul>
        <TodoAdder onAdd={this.handleAdd} />
      </div>
    );
  }
}

class TodoAdder extends React.Component {
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
      <form className="new-todo">
        <input
          className="new-todo"
          type="text"
          value={this.state.newTodoInput}
          onChange={this.handleNewTodoChange}
        />
        <button className="new-todo" type="submit" onClick={this.handleClick}>
          Add
        </button>
      </form>
    );
  }
}

function TodoElementFn(props) {
  return <li className="todo-item">{props.title}</li>;
}

function App() {
  return (
    <div className="App">
      <Welcome name="react-kata!"></Welcome>
      <h1>ToDos:</h1>
      <TodoList />
    </div>
  );
}

export default App;
