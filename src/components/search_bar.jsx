import { Component } from 'react';

class SearchBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector('#search-input').value;
    this.props.onSearch(input);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="search-input" />
          <input type="submit" value="Search" id="search-button"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
