import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/App.css';

import BaseLayout from './BaseLayout.js';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    menu: [],
  };
}

// whenever doing a fetch request, log the top level of the response to see if
// you need to drill to the next level
// first you are fetching info from the link and it returns a promise where the information is called whatever(i used result)
// but result isn't information we can read so we have to use .json which returns another promise
// we assign that json info the name response and then set the state of menu to the data in response
componentDidMount(){
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
  .then((result) => {
    result.json().then((response) => {
      this.setState({menu: response[0]});
      console.log(this.state.menu.Entrees);
    });
  });
}

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="fetchdata">

        <div>{BaseLayout}</div>

        </div>

      </div>
    );
  }
}

export default App;
