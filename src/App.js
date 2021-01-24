import { Component } from 'react';

import SearchBar from './components/search_bar';
import NavBar from './components/nav_bar';
import Contents from './components/contents';
import { getPokemonInfo } from './utils/pokeapi';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: null
    }
  }

  doSearch = (input) => {
    // TODO: Error indication; add route update?
    getPokemonInfo(input)
      .then(data => { this.setState({ selectedPokemon: data }) })
      .catch(error => { console.log(error) });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.doSearch} />
        <Contents data={this.state.selectedPokemon} />
        <NavBar data={this.state.selectedPokemon} onNav={this.doSearch} />
      </div>
    );
  }
}

export default App;
