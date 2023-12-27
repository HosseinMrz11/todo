import React, { Component } from "react";
import { observer } from "mobx-react";
import Todostore from "../store/todostore";

@observer
class todoitem extends Component {
  y;

  dich = () => {
    this.props.todo.togle();
  };

  remov = () => {
    Todostore.redtodo(this.y);
  };
  render() {
    const { todo } = this.props;
    this.y = todo;

    return (
      <li className={todo.completed ? "completed" : " "}>
        <div class="view">
          <input
            onChange={this.dich}
            class="toggle"
            type="checkbox"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button class="destroy" onClick={this.remov}></button>
        </div>
      </li>
    );
  }
}

export default todoitem;
