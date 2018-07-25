import React, {Fragment} from 'react'
import {
  // BrowserRouter as Router,
  // Route,
  Link,
  // Switch
} from 'react-router-dom'
import {Router} from 'react-router-dom';
// import history from './history'
// COMPONENTS
import Home from '../app/components/Home';
import Test from '../app/components/Test';
import Nav from '../app/components/Nav';
import NotFound from '../app/components/NotFound';
// import { HashRouter } from 'react-router-dom';

//REDUX

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import rootReducer from './reducers/reducer'

const history = createBrowserHistory()


const store = createStore(
  connectRouter(history)(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), // new root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

// Export the Routes
export default (
  // <HashRouter>
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/marco" component={Test}/>
            <Route component={NotFound}/>
          </Switch>
      </Fragment>
    </Router>
    </Provider>
  // </HashRouter>
  );
