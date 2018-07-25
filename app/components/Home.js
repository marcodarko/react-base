import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.myFunc = this.myFunc.bind(this);
  }

  myFunc(arg){
    // test func
  }

  render() {
    return (
      <section className="" style={{padding: '20px', margin: '0 auto'}}>
        <h1>React Running</h1>
        <button onClick={this.props.onTestClick}>Test Redux Store</button>
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
    onTestClick: ()=>{
      console.log('clicking');
      const action = {type: "TEST", payload: 'new value'};
      dispatch(action);
    }
  }
}



export default connect(
  mapStateToProps, mapDispatchToProps
)(Home)
