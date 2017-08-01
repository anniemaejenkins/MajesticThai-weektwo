import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>

        <div>
          <button>
            <NavLink to="/">
              Home
            </NavLink>
          </button>
        </div>

        <div>
          <button>
            <NavLink to="/appetizer">
              Appetizers
            </NavLink>
          </button>
        </div>

        <div>
          <button>
            <NavLink to="/entree">
              Entrees
            </NavLink>
          </button>
        </div>

        <div>
          <button>
            <NavLink to="/dessert">
              Desserts
            </NavLink>
          </button>
        </div>

      </div>
    )
  }
}
