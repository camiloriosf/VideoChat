// react imports
import React, { Component } from 'react';
// supporting imports
// material-ui imports

class Button extends Component {
  render() {
    const {
      children,
    } = this.props;
    return (
      <button onClick={this.props.onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
