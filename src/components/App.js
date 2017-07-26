import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/App.css';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    menu: [],
  };
}


componentDidMount(){
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
  .then(results => results.json())
  .then(responseData => {
    this.setState({menu: responseData.results})
  })
  .catch((error) => {
    console.log("Error with Fetching : ", error);
  });
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
