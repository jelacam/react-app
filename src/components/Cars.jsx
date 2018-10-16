import React, { Component } from "react";
import Car from "./Car";

class Cars extends Component {
  render() {
    return (
      <div className="row">
        {this.props.carsList.map(car => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    );
  }
}

export default Cars;
