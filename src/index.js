import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App.js';
import BaseLayout from './components/BaseLayout.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Menu from './components/Menu.js';

import registerServiceWorker from './registerServiceWorker';

let order = [];

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/menu" render={ (props) => <Menu { ...props } order={ order } /> } />
    </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
   document.getElementById('root')
 );

registerServiceWorker();
