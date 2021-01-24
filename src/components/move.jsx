import { Component } from "react";

class Move extends Component {
  handleClick = () => {
    this.props.onToggle(this.props.id, !this.props.open);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.open !== nextProps.open;
  }

  render() {
    const { name, accuracy, power, open } = this.props;
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
