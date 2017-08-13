import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="navBar">

        <div>
          <button>
            <NavLink to="/">
              Home
            </NavLink>
          </button>
        </div>

        <div>
          <button>
            <NavLink to="/about">
              About
            </NavLink>
          </button>
        </div>

        <div>
          <button>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </button>
        </div>

        <div>
          <button>
            <NavLink to="/menu">
              Menu
            </NavLink>
          </button>
        </div>

      </div>
    )
  }
}
