import React, { Component } from 'react';

import OrderItem from './OrderItem.js';

export default class Order extends Component{
  constructor(props){
    super(props);
    this.state = {
      order: {
        total: 0,
        orderItems: []
      }
    };
    this._addTotal = this._addTotal.bind(this);
  }

_addTotal(order){
  let total = this.props.order.items.reduce(function(acc, i) {
    return acc + Number(i.price)
  }, 0);
  return total;
}
  // this.props.order passes it down from the router
  render(){
    return(
      <div>
        <OrderItem  order={ this.props.order }/>
        { this._addTotal().toFixed(2) }
      </div>
    )
  }
}
