import React, { Component, useState } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({
      renderBall: true
    });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return (
        <div id="b" className="ball" style={this.state.ballPosition}></div>
      );
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(event) {
    if (event.keyCode === 39) {
      this.handleRight();
    }
  }
  handleRight() {
    var element = document.getElementById("b");
    element.style.left = parseInt(element.style.left) + 5 + "px";
  }
  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
