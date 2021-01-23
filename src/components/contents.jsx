import { Component } from 'react';
import Move from './move';

class Contents extends Component {

  types(data) {
    // In fact, the keys are not needed here since this list isn't dynamic:
    return data.map(entry => <li className="type-name" key={entry.key}> {entry.name} </li>)
  }

  moves(data) {
    return data.map(entry => <Move {...entry} />);
  }

  render() {
    if (!this.props.data) return <div className="contents" />; // TODO: refactor with Fragment?

    const { name, spriteURL, types, moves } = this.props.data;
    return (
      <div className="contents">
        <img src={spriteURL} alt="" className="sprite" />
        <h2 className="name">{name}</h2>
        <ul className="types">{this.types(types)}</ul>
        <div className="moves">{this.moves(moves)}</div>
      </div>
    );
  }
}

export default Contents;
