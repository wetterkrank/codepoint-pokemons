import { Component } from 'react';
import Move from './move';

class Contents extends Component {
  onToggle = (moveID, newState) => {
    this.props.onToggle(moveID, newState);
  }

  types(data) {
    // In fact, the keys are not needed here since this list isn't dynamic:
    return data.map(entry => <li className="type-name" key={entry.key}> {entry.name} </li>)
  }

  moves(data) {
    return data.map(entry => <Move {...entry} onToggle={this.onToggle} open={entry.id === this.props.openMove} />);
  }

  err(message) {
    message = (message === '404') ? 'not found' : 'an error occured';
    return (
      <div className="contents">
        <div className="sprite"><p>¯\_(ツ)_/¯</p></div>
        <h2 className="name">{message}</h2>
      </div>
    )
  }

  render() {
    if (this.props.error) return this.err(this.props.error);
    if (!this.props.selectedPokemon) return <div className="contents" />; // TODO: refactor with Fragment?

    const { name, spriteURL, types, moves } = this.props.selectedPokemon;
    return (
      <div className="contents">
        <div className="sprite">
          {spriteURL ? <img src={spriteURL} alt="" /> : ''}
        </div>
        <h2 className="name">{name}</h2>
        <ul className="types">{this.types(types)}</ul>
        <div className="moves">{this.moves(moves)}</div>
      </div>
    );
  }
}

export default Contents;
