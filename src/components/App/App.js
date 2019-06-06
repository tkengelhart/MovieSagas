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
        {this.props.selectedMovieDetails.title ? <div>
          <div>
            <button onClick={() => this.props.dispatch({
              type: 'SET_MOVIE_DETAILS',
              payload: {}
            })}>
              Back
            </button>
          </div>
          <img
            src={this.props.selectedMovieDetails.poster} 
            onClick={() => this.props.dispatch({
              type: 'GET_MOVIE_DETAILS',
              payload: {movieId: this.props.selectedMovieDetails.id}
            })}
          />
          <h1>{this.props.selectedMovieDetails.title}</h1>
          <span>{this.props.selectedMovieDetails.description}</span>
        </div>:
        this.props.movies.map(movie => (
          <div key={movie.id}>
            <img 
              src={movie.poster} 
              onClick={() => this.props.dispatch({
                type: 'GET_MOVIE_DETAILS',
                payload: {movieId: movie.id}
              })}
            />
          </div>
        ))}
        {/* <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre> */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);
