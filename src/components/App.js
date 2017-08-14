import React, { Component } from 'react';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Majestic Thai</h1>
      <div>
        <h3>Hours of Operation</h3>
        <p>Mon-Fri:</p>
        <p>11AM-11PM</p>
        <p>Sat:</p>
        <p>11AM-12AM</p>
        <p>Sun:</p>
        <p>CLOSED</p>
      </div>

      </div>
    );
  }
}

export default App;
