import React, {Component} from 'react';

// import dumb components
import Dessert from './dessert.js';
import Entree from './entree.js';
import Appetizer from './appetizer.js';

export default class BaseLayout extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div>
    <div>{Dessert}</div>
    <div>{Appetizer}</div>
    <div>{Entree}</div>
    </div>
    );
  }
}
