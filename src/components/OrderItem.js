import React, { Component } from 'react';

export default class OrderItem extends Component{
  constructor(props){
    super(props);
    this.state ={
      order: []
    };
  }
  render(){
    let orderItems = this.props.order.items.map(function(item, index) {
      return (
        <li key={index}>
          <p>{ item.dish }</p>
          <p>{ item.price }</p>
        </li>
      )
    })
    return(
      <ul>
        { orderItems }
      </ul>
    );
  }
}
