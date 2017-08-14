import React, {Component} from 'react';

// import dumb components
import Navigation from './Navigation.js';

export default class BaseLayout extends Component{
  render(){
    return(
    <div>
      <Navigation />
      {this.props.children}
    </div>
    );
  }
}
