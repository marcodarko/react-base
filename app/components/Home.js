import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      something: ''
    }
    this.myFunc = this.myFunc.bind(this);
  }



  myFunc(arg){

  	this.setState({
  		something : '1'
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
