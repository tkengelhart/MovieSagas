import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <>
        <h1>Details</h1>
        <pre>
          {JSON.stringify(this.props.reduxState)}
        </pre>
      </>
    );
  }
}

const mapReduxStateToProps = reduxState => ({reduxState});

export default connect(mapReduxStateToProps)(Details);
