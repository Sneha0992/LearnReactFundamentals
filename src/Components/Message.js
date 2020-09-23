import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome Visitor"
    };
  }
  changeMsg() {
    this.setState({
      msg: "Thank you for subscribing"
    });
  }
  render() {
    return (
      <div>
        {/* <h1>Welcome to class components</h1> */}
        {/* <p>{this.props.name}</p> */}
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.changeMsg()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
