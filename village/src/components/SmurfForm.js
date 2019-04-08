import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addNewSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = { ...this.state };
    this.props.addSmurf(newSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });

    alert("New Smurf has been successfully added");
    this.props.history.push("/");
    window.location.reload();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h2>Add New Smurf</h2>
        <form onSubmit={this.addNewSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            required
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
