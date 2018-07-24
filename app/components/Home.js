import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      something: 'Marco'
    }
    this.myFunc = this.myFunc.bind(this);
  }

  myFunc(arg){

  	this.setState({
  		something : 'Conor'
  	});

  }

  render() {
    return (
      <section className="">
        <h1>React Running</h1>
      </section>
    );
  }
}
