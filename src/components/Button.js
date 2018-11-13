import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
    	<div className="col-3">
	        <button
	        onClick={this.props.onClick}
	        className="Button btn btn-dark"
	        data-size={this.props.size}
	        data-value={this.props.value}
	      	>
	        {this.props.label}
	      	</button>
      	</div>
    );
  }
}

export default Button;