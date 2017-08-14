import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App.js';
import BaseLayout from './components/BaseLayout.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Menu from './components/Menu.js';
import Order from './components/Order.js';

import registerServiceWorker from './registerServiceWorker';

let order = {
  items: [],
  total: 0
}

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/menu" render={ (props) => <Menu { ...props } order={ order } /> } />
      <Route path="/order" render={ (props) => <Order { ...props} order={ order } /> } />
    </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
   document.getElementById('root')
 );

registerServiceWorker();
