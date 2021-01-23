import { Component } from 'react';
import './App.css';

import SearchBar from './components/search_bar';
import NavBar from './components/nav_bar';
import Contents from './components/contents';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Contents />
        <NavBar />
      </div>
    );
  }
}

export default App;
