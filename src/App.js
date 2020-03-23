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
    this.state = { todos: ["Homework", "Clean Up", "Wash dishes"] };
  }

  componentDidMount() {
    setTimeout(() => this.addMore(), 1000);
    setTimeout(() => this.addMore(), 2000);
    setTimeout(() => this.addMore(), 3000);
  }

  addMore() {
    this.setState(prevState => ({
      todos: [...prevState.todos, "more"]
    }));
    console.log(`pushed`);
  }

  componentWillUnmount() {}

  render() {
    return (
      <ul className="todo-list">
        {/* <TodoElementsFn todos={todos} /> */}
        {this.state.todos.map((todo, index) => (
          <TodoElementFn key={index} todo={todo} />
        ))}
      </ul>
    );
  }
}

function TodoElementFn(props) {
  return <li className="todo-item">{props.todo}</li>;
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
