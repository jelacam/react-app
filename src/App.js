import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cars from "./components/Cars";

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
    const { cars } = this.state;
    console.log("cars data: ", cars);
    return <div>{cars.data && <Cars carsList={cars.data} />}</div>;
  }
}

export default App;
