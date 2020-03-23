import React from "react";
import "./App.css";

const todos = ["Homework", "Clean Up", "Wash dishes"];

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function TodoListFn(props) {
  return (
    <ul className="todo-list">
      {/* <TodoElementsFn todos={todos} /> */}
      {props.todos.map((todo, index) => (
        <TodoElementFn key={index} todo={todo} />
      ))}
    </ul>
  );
}

function TodoElementFn(props) {
  return <li className="todo-item">{props.todo}</li>;
}

function App() {
  return (
    <div className="App">
      <Welcome name="react-kata!"></Welcome>
      <h1>ToDos:</h1>
      <TodoListFn todos={todos} />
    </div>
  );
}

setInterval(() => {
  todos.push("more");
  console.log(`pushed`);
}, 1000);

export default App;
