import React, { Component } from 'react';

export default class MenuItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p>{this.props.item.dish}</p>
        <p>{this.props.item.description}</p>
        <p>{this.props.item.price}</p>
      </div>
    );
  }
}
