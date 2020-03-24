import React from "react";
import "./TodoItem.css";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, editedTitle: props.todo.title };
  }

  startEditing = () => {
    this.setState({ editing: true });
  };

  onEditChange = e => {
    this.setState({ editedTitle: e.target.value });
  };

  onSave = () => {
    this.props.onChange({
      ...this.props.todo,
      title: this.state.editedTitle
    });
    this.setState({ editing: false });
  };

  render() {
    return (
      <li className="todo-item">
        {!!this.state.editing ? (
          <>
            <input
              className="todo-content"
              value={this.state.editedTitle}
              onChange={this.onEditChange}
              type="text"
            />
            <button className="todo-content" onClick={this.onSave}>
              Save
            </button>
          </>
        ) : (
          <>
            {this.props.todo.title}
            <button
              className="todo-content"
              onClick={() => this.props.onDelete(this.props.todo.id)}
            >
              Delete
            </button>
            <button className="todo-content" onClick={this.startEditing}>
              Edit
            </button>
          </>
        )}
      </li>
    );
  }
}
