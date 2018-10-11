import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";
import { connect } from 'react-redux';
import {actionIncrement} from './actions/simpleAction';
import {actionDecrement} from './actions/simpleAction';
import { debug } from "util";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    fetch("/api/getUser")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
   }

  

  actionIncrement = (event) => {
    this.props.actionIncrement();
   
  }
  actionDecrement = (event) => {
    this.props.actionDecrement();
    
  }
  render() {
    return (
      <div>
        
        <button onClick={this.actionIncrement} > INCREMENT </button>
        <button onClick={this.actionDecrement} > DECREMENT </button>
        {this.state.username ? (
          <h1>Hello {this.state.username} {this.props.simpleReducer.count} </h1>

        ) : (
            <h1>Loading.. please wait!</h1>
          )}


      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    actionIncrement: () => dispatch(actionIncrement()),
    actionDecrement: () => dispatch(actionDecrement())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


