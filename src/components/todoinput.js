import React, { Component } from "react";
import Todostore from "../store/todostore";
class Todoinput extends Component {
  state = {
    value: ""
  };
  handleKeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    Todostore.addtodo(this.state.value);
    this.setState({
      value: ""
    });
  };
  render() {
    return (
      <header class="header">
        <h1>todos</h1>
        <input
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
          onKeyDown={event => this.handleKeyDown(event)}
          class="new-todo"
          placeholder="What needs to be done?"
          type="text"
        />
      </header>
    );
  }
}
export default Todoinput;
