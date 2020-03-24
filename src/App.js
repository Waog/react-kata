import React from "react";
import "./App.css";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoInput: "",
      todos: [
        { id: 0, title: "Homework" },
        { id: 1, title: "Clean Up" }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.addMore();
  }

  handleNewTodoChange(event) {
    this.setState({ newTodoInput: event.target.value });
  }

  addMore() {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        { id: prevState.todos.length, title: this.state.newTodoInput }
      ],
      newTodoInput: ""
    }));
    console.log(`pushed`);
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.state.todos.map(todo => (
            <TodoElementFn key={todo.id} title={todo.title} />
          ))}
        </ul>
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
      </div>
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
