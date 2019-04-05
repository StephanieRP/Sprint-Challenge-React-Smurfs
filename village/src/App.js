import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import SingleSmurf from "./components/SingleSmurf";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        console.log(res);
      })
      .catch(err => {
        console.log("Something bad happened..", err);
      });
  }

  addSmurf = newSmurf => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });

        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });

        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
          )}
        />
        <Route
          exact
          path="/addSmurf"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
        {/* <Route
          exact
          path="/:id"
          render={props => (
            <SingleSmurf {...props} smurfs={this.state.smurfs} />
          )}
        /> */}
      </div>
    );
  }
}

export default App;
