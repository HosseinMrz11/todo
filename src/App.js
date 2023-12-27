import React, { Component } from "react";
import store from "./store";
import "./App.css";
import { observer } from "mobx-react";
import Todoinput from "./components/todoinput.js";
import Todoitems from "./components/todoitems.js";
import Footer from "./components/footer.js";
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="todoapp">
          <Todoinput />
          <Todoitems />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
