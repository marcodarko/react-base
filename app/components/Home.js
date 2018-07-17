import React from 'react';

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
      <div className="container">
        <h1>Hello World</h1>
      </div>
    );
  }
}
