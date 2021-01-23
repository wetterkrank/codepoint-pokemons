import { Component } from "react";

class Move extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { name, accuracy, power } = this.props;
    return (
      <div className="move">
        <div className="move-name" onClick={this.handleClick}>
          {name}
        </div>
        <div className={'move-details' + (this.state.open ? ' open' : '')}>
          <p>Accuracy {accuracy || '??'}</p>
          <p>Power {power || '??'}</p>
        </div>
      </div>
    );
  }
}

export default Move;
