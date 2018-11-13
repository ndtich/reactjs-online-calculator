import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
        <div className="row Buttons">{this.props.children} </div>
    );
  }
}

export default Buttons;