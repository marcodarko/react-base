import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state={

    }
    this.myFunc = this.myFunc.bind(this);
  }

  myFunc(arg){

  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="nav-item nav-link active text-light" to='/'>Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to='/marco'>To Test <span className="sr-only">(current)</span></Link>
          </div>
        </div>
      </nav>
    );
  }
}
