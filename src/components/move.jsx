import { Component } from "react";

class Move extends Component {
  handleClick = () => {
    this.props.onToggle(this.props.id, !this.props.open);
  };

  render() {
    const { name, accuracy, power, open } = this.props;
    console.log(`MOVE RENDER, id ${this.props.id}, open: ${open}`)
    return (
      <div className="move">
        <div className="move-name" onClick={this.handleClick}>
          {name}
        </div>
        <div className={'move-details' + (open ? ' open' : '')}>
          <p>Accuracy {accuracy || '??'}</p>
          <p>Power {power || '??'}</p>
        </div>
      </div>
    );
  }
}

export default Move;
