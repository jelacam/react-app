import React, { Component } from "react";
import "./App.css";
import Cars from "./components/Cars";
import Search from "./components/Search";

const API = "http://www.json-generator.com/api/json/get/bQJcQFdAGG?indent=4";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      displayedCars: [],
      searchTerm: "",
      selected: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data =>
        this.setState({ cars: data.data, displayedCars: data.data })
      );
  }

  render() {
    const { displayedCars } = this.state;
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <h2>Cars</h2>
        {displayedCars && (
          <Cars carsList={displayedCars} onSelect={this.handleSelect} />
        )}
        <h2> Selected </h2>
      </div>
    );
  }

  handleSearch = token => {
    console.log("Search token: ", token);
    let carsToFilter = [...this.state.cars];
    carsToFilter = carsToFilter.filter(car => {
      return car.name.toLowerCase().indexOf(token.toLowerCase().trim()) !== -1;
    });

    this.setState({ displayedCars: carsToFilter });
  };

  handleSelect = id => {
    let selected = [...this.state.selected];
    if (selected.indexOf(id) > -1) {
      selected.pop(id);
    } else {
      selected.push(id);
    }
    console.log("Selected count: ", selected.length);

    this.setState({ selected: selected });
  };
}

export default App;
