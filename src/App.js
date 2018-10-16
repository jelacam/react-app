import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const API = "http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({ cars: data }));
  }

  render() {
    console.log("Cars: ", this.state.cars);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
