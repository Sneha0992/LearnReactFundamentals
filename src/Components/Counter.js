import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log(this.state.count);
      }
    );
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}> Go to Site </button>
        <h1>Hits {this.state.count}</h1>
      </div>
    );
  }
}
export default Counter;
