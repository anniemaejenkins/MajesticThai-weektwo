import React, { Component } from 'react';

import MenuItem from './MenuItem.js';

export default class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      menu: {
        Appetizers: [],
        Entrees: [],
        Desserts: [],
        prices: []
      }
    };
  }

  // whenever doing a fetch request, log the top level of the response to see if
  // you need to drill to the next level
  // first you are fetching info from the link and it returns a promise where the information is called whatever(i used result)
  // but result isn't information we can read so we have to use .json which returns another promise
  // we assign that json info the name response and then set the state of menu to the data in response
  componentDidMount(){
    console.log('props', this.props);
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then((result) => {
      result.json().then((response) => {
        this.setState({menu: response[0]});
        // console.log(this.state);
      });
    });
  }
    render(){
      let appetizers = this.state.menu.Appetizers.map((item, index) => {
        console.log("item", item);
        return <MenuItem key={index} item={item} order={ this.props.order }/>
      })
      let entrees = this.state.menu.Entrees.map((item, index) => {
        return <MenuItem key={index} item={item} order={ this.props.order } />
      })
      let desserts = this.state.menu.Desserts.map((item, index) => {
        return <MenuItem key={index} item={item} order={ this.props.order } />
      })
      return(
        <div>
          <div>
            <h3>Appetizers</h3>
            <p>{ appetizers }</p>
          </div>
          <div>
            <h3>Entrees</h3>
            { entrees }
          </div>
          <div>
            <h3>Desserts</h3>
            { desserts }
          </div>
        </div>

        // { this.state.show === 'menu' ? <Menu /> : <Order />}
      );
    }
}
