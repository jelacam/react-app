import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    const { handleSearch } = this.props;
    this.setState({ search: event.target.value });
    handleSearch(event.target.value);
  }

  render() {
    return (
      <div className="input-group md-form form-sm form-2 pl-0">
        <input
          className="form-control my-0 py-1 amber-border"
          type="text"
          value={this.state.search}
          placeholder="Search"
          aria-label="Search"
          onChange={this.updateSearch}
        />
      </div>
    );
  }
}

export default Search;
