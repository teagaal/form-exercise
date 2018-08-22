import React, { Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  onChange = (e) => {
    const name = this.props.name;
    const value = e.target.value;

    this.setState({ value });

    this.props.onChange({ name, value })
  }

  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        value={this.state.value}
        onChange={this.onChange}
      />
    )
  }
}

export default Field;