import { Component } from 'react';

class Contents extends Component {
  render() {
    if (!this.props.data) return null;
    
    console.log(this.props.data);
    const {id, name, spriteURL, types, moves} = this.props.data;
    return (
      <div className="contents">
        <img src={spriteURL} alt="" className="sprite"/>
        <h2 className="name">{name}</h2>
      </div>
    );
  }
}

export default Contents;
