import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'GET_MOVIES'})
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <pre>
          {JSON.stringify(this.props.movies, null, 2)}
        </pre>
        {this.props.movies.map(movie => (
          <div key={movie.id}>
            <img src={movie.poster} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);
