import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' }

  onInputChange (term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="form-control"
          placeholder="Search for videos..."
          value = {this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
