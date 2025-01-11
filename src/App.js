import { Component } from "react";
import { Counter } from "./components/CounterTest";

class App extends Component {
  state = {
    test: "test",
  };

  showInfo() {
    return this.test;
  }

  render() {
    return (
      <>
        <h2>Counter</h2>
        <Counter text={this.state.test} />
      </>
    );
  }
}

export default App;
