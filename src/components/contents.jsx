import { Component } from 'react';
import Move from './move';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = { openMove: null }
  }

  doToggle = (moveID, newState) => {
    this.setState({ openMove: newState && moveID });
  }

  types(data) {
    // In fact, the keys are not needed here since this list isn't dynamic:
    return data.map(entry => <li className="type-name" key={entry.key}> {entry.name} </li>)
  }

  moves(data) {
    return data.map(entry => <Move {...entry} onToggle={this.doToggle} open={entry.id === this.state.openMove} />);
  }

  render() {
    if (!this.props.data) return <div className="contents" />; // TODO: refactor with Fragment?

    console.log(`CONTENT RENDER; open move: ${this.state.openMove}`);
    const { name, spriteURL, types, moves } = this.props.data;
    return (
      <div className="contents">
        <div className="sprite">
          <img src={spriteURL} alt="" />
        </div>
        <h2 className="name">{name}</h2>
        <ul className="types">{this.types(types)}</ul>
        <div className="moves">{this.moves(moves)}</div>
      </div>
    );
  }
}

export default Contents;
