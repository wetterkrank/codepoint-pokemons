import { Component } from 'react';

class SearchBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.querySelector('#search-input').value;
    this.props.onSearch(input);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="search-input" required /> 
          <input type="submit" value="Search" id="search-button"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
