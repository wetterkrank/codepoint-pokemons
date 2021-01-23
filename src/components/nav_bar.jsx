import { Component } from 'react';

class NavBar extends Component {

  handleClick = (event) => {
    console.log(event.target.dataset.id);
    this.props.onNav(event.target.dataset.id);
  }

  render() {
    if (!this.props.data) return (<div className="nav-bar" />);

    const { id, name, prev, next } = this.props.data;
    return (
      <div className="nav-bar">
        <div className="nav-prev">
          {prev ? <button data-id={prev} id="prev-button" onClick={this.handleClick}>#{prev}<br />⬅</button> : ''}
        </div>
        <div id="nav-current">#{id}<br />{name}</div>
        <div className="nav-next">
          {next ? <button data-id={next} id="next-button" onClick={this.handleClick}>#{next}<br />➡</button> : ''}
        </div>
      </div>
    );
  }
}

export default NavBar;
