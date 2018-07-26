import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      test: 'new value'
    }
    this.myFunc = this.myFunc.bind(this);
  }

  myFunc(arg){
    // test func
  }

  render() {
    return (
      <section className="" style={{padding: '20px', margin: '0 auto'}}>
        <h1>React Running</h1>
        <button onClick={()=>{this.props.onTestClick(this.state.test)}}>Test Redux Store</button>
        <p>VALUE OF 'SOMETHING': {this.props.something}</p>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    something : state.something
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTestClick: (value)=>{
      console.log('clicking');
      const action = {type: "TEST", payload: value};
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home)
