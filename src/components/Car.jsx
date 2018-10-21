import React, { Component } from "react";

class Car extends Component {
  handleInputChange = event => {
    const { car, onSelect } = this.props;

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    if (target.type === "checkbox") {
      onSelect(car, value);
    }
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
            <input
              name="isSelected"
              type="checkbox"
              checked={car.selected}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
