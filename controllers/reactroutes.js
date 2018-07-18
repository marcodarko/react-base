import React from 'react'
import {
  // BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {Router} from 'react-router-dom';
import history from './history'
// COMPONENTS
import Home from '../app/components/Home';
import Test from '../app/components/Test';
import Nav from '../app/components/Nav';
// import { HashRouter } from 'react-router-dom';

// Export the Routes
export default (
  // The high level component is the Router component
  // <HashRouter>
    <Router history={history}>
      <div>
          <Nav></Nav>
          <Route exact path="/" component={Home}/>
          <Route exact path="/marco" component={Test}/>
      </div>
    </Router>
  // </HashRouter>
  );
