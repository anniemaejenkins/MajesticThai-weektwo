import React, { Component } from 'react';

export default class MenuItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      order: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    console.log('item', item);
    let order = this.props.order;
    order.push(item);
  }

  render(){
    return(
      <div>
        <p>{this.props.item.dish}</p>
        <p>{this.props.item.description}</p>
        <p>{this.props.item.price}</p>
        <input type='button' value='order' onClick={ () => this.addItem(this.props.item) }/>
      </div>
    );
  }
}
