import React, { Component } from 'react';
import './App.css';
import Cover from './components/cover/Cover'
import details, { Details } from './components/details/Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/cover/menu/Menu'
import ReactTypingEffect from 'react-typing-effect';

export class App extends Component {
  render() {
    return (
      <div className = "main">
        <Cover></Cover>
        <center>
          <span className = "type">
            <ReactTypingEffect text="while (alive?) code();"> </ReactTypingEffect>
          </span>
        </center>
        <center><i className = 'welcome'>Welcome to my crib!</i></center>
        <br></br>
        <Details></Details>
        <Menu className = "menuMain"></Menu>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default App
