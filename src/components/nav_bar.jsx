import { Component } from 'react';

class NavBar extends Component {

  handleClick = (event) => {
    this.props.onNav(event.target.dataset.id);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.props.data) ? this.props.data.id !== nextProps.data.id : true;
  // }

  render() {
    if (!this.props.data) return (<div className="nav-bar" />);

    const { id, name, prev, next } = this.props.data;
    return (
      <div className="nav-bar">
        <div className="nav">
          {prev ? <button data-id={prev} id="prev-button" onClick={this.handleClick}>#{prev}<br />⬅</button> : ''}
        </div>
        <div id="nav-current">#{id}<br /><b>{name}</b></div>
        <div className="nav">
          {next ? <button data-id={next} id="next-button" onClick={this.handleClick}>#{next}<br />➡</button> : ''}
        </div>
      </div>
    );
  }
}

export default NavBar;
