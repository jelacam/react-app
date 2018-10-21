import React, { Component } from "react";

class Selected extends Component {
  render() {
    const { selected } = this.props;
    return (
      <div>
        <ul className="list-group">
          {selected
            .filter(car => {
              return car.selected === true;
            })
            .map(car => (
              <li className="list-group-item" key={car.id}>
                {car.name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Selected;
