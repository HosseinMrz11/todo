import React, { Component } from "react";
import Todoitem from "./todoitem";
import todostore from "../store/todostore.js";
import { observer } from "mobx-react";

@observer
class footer extends Component {
  render() {
    return (
      <footer class="footer">
        <span class="todo-count">
          <strong>
            {todostore.todos.filter(w => w.completed == false).length}
          </strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
        </span>
        <ul class="filters">
          <li>
            <a
              href="#"
              onClick={() => {
                todostore.showsts = 1;
              }}
              class={todostore.showsts == 1 ? "selected" : ""}
            >
              All
            </a>
          </li>
          <span> </span>
          <li>
            <a
              href="#"
              onClick={() => {
                todostore.showsts = 2;
              }}
              class={todostore.showsts == 2 ? "selected" : ""}
            >
              Active
            </a>
          </li>
          <span> </span>
          <li>
            <a
              href="#"
              onClick={() => {
                todostore.showsts = 3;
              }}
              class={todostore.showsts == 3 ? "selected" : ""}
            >
              Completed
            </a>
          </li>

          <span> </span>
          <li>
            <a
              href="#"
              onClick={() => {
                console.log(todostore.todos.filter(w => w.completed == false));
                todostore.todos = todostore.todos.filter(
                  w => w.completed == false
                );
              }}
              class="selected"
            >
              Clear Completed
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default footer;
