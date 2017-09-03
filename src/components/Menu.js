import React, { Component } from 'react';

import MenuItem from './MenuItem.js';

export default class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      menu: {
        Appetizers: [],
        Entrees: [],
        Desserts: []
      }
    };
  }

  // whenever doing a fetch request, log the top level of the response to see if
  // you need to drill to the next level
  // first you are fetching info from the link and it returns a promise where the information is called whatever(i used result)
  // but result isn't information we can read so we have to use .json which returns another promise
  // we assign that json info the name response and then set the state of menu to the data in response
  componentDidMount(){
    // console.log('props', this.props);
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then((result) => {
      result.json().then((response) => {
        this.setState({menu: response[0]});
        // console.log(this.state);
      });
    });
  }
    render(){

      // let menuItems = this.state.menu[this.state.category].map ...
      let appetizers = this.state.menu.Appetizers.map((item, index) => {
        // console.log("item", item);
        return <div className="appInfo"><MenuItem key={index} item={item} order={ this.props.order } /></div>
      })
      let entrees = this.state.menu.Entrees.map((item, index) => {
        return <div className="entreeInfo"><MenuItem key={index} item={item} order={ this.props.order } /></div>
      })
      let desserts = this.state.menu.Desserts.map((item, index) => {
        return <div className="dessertInfo"><MenuItem key={index} item={item} order={ this.props.order } /></div>
      })
      return(
        <div className="menu">
          <div className="appetizers">
            <h3>Appetizers</h3>
            <p className="appItem">{ appetizers }</p>
          </div>
          <div className="entrees">
            <h3>Entrees</h3>
            <p className="entreeItem">{ entrees }</p>
          </div>
          <div className="desserts">
            <h3>Desserts</h3>
            <p className="dessertItem">{ desserts }</p>
          </div>
        </div>

      );
    }
}
