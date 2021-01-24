import { Component } from "react";

class Move extends Component {
  constructor(props) {
    super(props);
    this.state = { closed: true };
  }

  handleClick = () => {
    this.setState({ closed: !this.state.closed });
  };

  render() {
    const { name, accuracy, power } = this.props;
    return (
      <div className="move">
        <div className="move-name" onClick={this.handleClick}>
          {name}
        </div>
        <div className={'move-details' + (this.state.closed ? ' closed' : '')}>
          <p>Accuracy {accuracy || '??'}</p>
          <p>Power {power || '??'}</p>
        </div>
      </div>
    );
  }
}

export default Move;
