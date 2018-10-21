import React, { Component } from "react";
import Checkbox from "./Checkbox";

class Car extends Component {
  onChecked = checked => {
    const { car, onSelect } = this.props;

    onSelect(car, checked);
  };

  render() {
    const { car } = this.props;
    return (
      <div className="row-3">
        <div
          className="card text-center"
          style={{ width: "18rem", height: "20rem", margin: "5rem" }}
        >
          <img className="card-img-top" src={car.image} alt={car.name} />
          <div className="card-body">
            <h5 className="card-title">{car.name}</h5>
            <Checkbox onChecked={this.onChecked} checked={car.selected} />
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
