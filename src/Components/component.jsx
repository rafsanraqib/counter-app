import React, { Component } from "react";

class Counter extends Component {
  style = {
    fontSize: 20
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    console.log(this.props);
    return (
      <div>
        <span style={this.style} className={classes}>
          {" "}
          {this.formatCount()}{" "}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.style}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
