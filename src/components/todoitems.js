import React, { Component } from "react";
import Todoitem from "./todoitem";
import todostore from "../store/todostore.js";
import { observer } from "mobx-react";

@observer
class todoitems extends Component {
  render() {
    return (
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <ul class="todo-list">
          {todostore.showsts == 1
            ? todostore.todos.map(todo => {
                return <Todoitem todo={todo} />;
              })
            : todostore.showsts == 2
            ? todostore.todos
                .filter(wo => wo.completed == false)
                .map(todo => {
                  return <Todoitem todo={todo} />;
                })
            : todostore.todos
                .filter(wo => wo.completed == true)
                .map(todo => {
                  return <Todoitem todo={todo} />;
                })}
        </ul>
      </section>
    );
  }
}

export default todoitems;
