import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
// COMPONENTS
import Home from '../app/components/Home';
// Export the Routes
// export default (
//   // The high level component is the Router component
//   <Router >
//     <div className="container-fluid">
//         <Route exact path="/" component={Home}/>
//     </div>
//   </Router>
//   );

  const BasicExample = () => (
    <Router>
      <div className="container-fluid">
          <h1>Test</h1>
          <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );

  export default BasicExample;