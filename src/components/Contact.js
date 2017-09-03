import React, { Component } from 'react';

export default class Contact extends Component{
  render(){
    return(
      <div className="contact">
        <div className="conInfo">
        <h1 className="contactheading">Need to contact us?</h1>
        <i className="fa fa-phone fa-lg" aria-hidden="true"></i>
        <p> 864-555-5555</p>
        <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
        <p>majesticthai@gmail.com</p>
        <div className="address">
        <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
          <p>555 S Main St.</p>
          <p>Greenville, SC</p>
          <p>29601</p>
          </div>
        </div>
      </div>
    )
  }
}
