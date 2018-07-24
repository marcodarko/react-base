import React, {Fragment} from 'react'
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
import NotFound from '../app/components/NotFound';
// import { HashRouter } from 'react-router-dom';

//REDUX


// Export the Routes
export default (
  // The high level component is the Router component
  // <HashRouter>
    <Router history={history}>
      <Fragment>
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/marco" component={Test}/>
            //catch all
            <Route component={NotFound}/>
          </Switch>
      </Fragment>
    </Router>
  // </HashRouter>
  );
