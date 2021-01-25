import { Component } from 'react';

import SearchBar from './components/search_bar';
import NavBar from './components/nav_bar';
import Contents from './components/contents';
import { getPokemonInfo } from './utils/pokeapi';
import { isSupportedLS } from './utils/storage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: null,
      openMove: null,
      favs: isSupportedLS() ? new Set(JSON.parse(localStorage.getItem('favs'))) : new Set(),
      error: null
    }
  }

  doSearch = (input) => {
    // TODO: Add route update?
    if (!input) return;

    getPokemonInfo(input)
      .then(data => { 
        this.setState({ selectedPokemon: data, openMove: null, error: null }) 
      })
      .catch(error => { 
        console.log(error);
        this.setState({ selectedPokemon: null, error: error.message });
      });
  }

  toggleMove = (moveID, newState) => {
    this.setState({openMove: newState && moveID});
  }

  toggleFav = (pokeID) => {
    let newFavs = new Set(this.state.favs);
    if (newFavs.has(pokeID)) {
      newFavs.delete(pokeID)
    } else {
      newFavs.add(pokeID)
    }
    this.setState({favs: newFavs});
    if (isSupportedLS()) localStorage.setItem('favs', JSON.stringify([...newFavs]));
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.doSearch} />
        <Contents {...this.state} onToggle={this.toggleMove} onFav={this.toggleFav} />
        <NavBar data={this.state.selectedPokemon} onNav={this.doSearch} />
      </div>
    );
  }
}

export default App;
