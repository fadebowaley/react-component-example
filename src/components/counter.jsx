//imrc - simple react snippets
import React, { Component } from "react";

//cc -  simple react snippets
class Counter extends Component {
  // Do all magic here
  state = {
    count: this.props.value,
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  //   //console.log("Constructor", this);
  // }

  /** 
  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };
  {this.state.tags.length === 0 && "The Table is Empty!"}
{this.state.tags.map((tag) => (
            <li key={tag}></li>
*/
  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
    console.log(product);
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  doProduct = () => {
    this.handleIncrement({ id: 1, name: "tomato" });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <button
          style={{ fontSize: 25 }}
          onClick={this.doProduct}
          className="btn btn-primary btn-sm m-2"
        >
          Increment🔵
        </button>
        <button style={{ fontSize: 25 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </button>
        <button
          style={{ fontSize: 25 }}
          onClick={this.handleDecrement}
          className="btn btn-danger btn-sm m-2"
        >
          Decrement🔵
        </button>
      </div>
    );
  }

  //manipulatiing the badeges

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes +=
      this.state.count === 0
        ? "warning"
        : this.state.count < 0
        ? "danger"
        : "primary";
    return classes;
  }

  formatCount() {
    //using method and destructuring
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
  /** 
  changeName() {
    let { count, label } = this.state;
    if (count === 0) {
      label = "no Qualms";
    } else {
      label = `Got values-> ${this.state.count};`;
    }
    return label;
  }
  */
}

export default Counter;
