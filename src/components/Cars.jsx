import React, { Component } from "react";
import Car from "./Car";

class Cars extends Component {
  render() {
    const { onSelect } = this.props;
    return (
      <div className="row">
        {this.props.carsList.map(car => (
          <Car key={car.id} car={car} onSelect={onSelect} />
        ))}
      </div>
    );
  }
}

export default Cars;
