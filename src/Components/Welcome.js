import React, { Component } from "react";
class Welcome extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Welcome to class components</h1>
        <p>{name}</p>
      </div>
    );
  }
}
export default Welcome;
