import React, { Component } from "react";

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
  }

  componentDidMount() {
    const { checked } = this.props;
    if (checked != null) {
      this.handleInputChange(checked);
    }
  }

  handleInputChange = value => {
    const { onChecked } = this.props;
    this.setState({ selected: value });
    onChecked(value);
  };

  render() {
    const { selected } = this.state;

    return (
      <div>
        <input
          name="isSelected"
          type="checkbox"
          checked={selected}
          onChange={() => this.handleInputChange(!selected)}
        />
      </div>
    );
  }
}

export default Checkbox;
