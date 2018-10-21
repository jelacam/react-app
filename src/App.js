import React, { Component } from "react";
import "./App.css";
import Cars from "./components/Cars";
import Search from "./components/Search";
import Selected from "./components/Selected";

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
    const { displayedCars, cars } = this.state;
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <h2>Cars</h2>
        {displayedCars && (
          <Cars carsList={displayedCars} onSelect={this.handleSelect} />
        )}
        <h2> Selected </h2>
        <Selected selected={cars} />
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

  handleSelect = (car, checked) => {
    let cars = [...this.state.cars];
    const index = cars.indexOf(car);
    console.log("Selected: ", car, " ", checked);
    if (index > -1) {
      cars[index].selected = checked;
    }

    this.setState({ cars: cars });
  };
}

export default App;
