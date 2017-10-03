import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
  render(){
    return(
      <div className="navBar">

        <div>
          <button className="navButton">
            <NavLink className="navLink" to="/MajesticThai-weektwo/">
              Home
            </NavLink>
          </button>
        </div>

        <div>
          <button className="navButton">
            <NavLink className="navLink" to="/about">
              About
            </NavLink>
          </button>
        </div>

        <div>
          <button className="navButton">
            <NavLink className="navLink" to="/contact">
              Contact
            </NavLink>
          </button>
        </div>

        <div>
          <button className="navButton">
            <NavLink className="navLink" to="/menu">
              Menu
            </NavLink>
          </button>
        </div>

        <div>
          <button className="navButton">
            <NavLink className="navLink" to="/order">
              Order
            </NavLink>
          </button>
        </div>

      </div>
    )
  }
}
