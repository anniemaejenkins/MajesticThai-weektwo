import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App.js';
import BaseLayout from './components/BaseLayout.js';
import Appetizer from './components/appetizer.js';
import Dessert from './components/dessert.js';
import Entree from './components/entree.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/appetizer" component={Appetizer} />
      <Route path="/dessert" component={Dessert} />
      <Route path="/entree" component={Entree} />
    </Switch>
  </BrowserRouter>
  ,
   document.getElementById('root')
 );

registerServiceWorker();
