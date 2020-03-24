import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Welcome from "./components/Welcome";

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
