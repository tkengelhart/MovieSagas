import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    movieList: [],
  }

  componentDidMount() {
    axios.get('/api/movies')
      .then(response => {
        this.setState({
          movieList: response.data,
        });
      });
  }

  handleClick = movie => {
    this.props.dispatch({type: 'SET_MOVIE_DETAILS', payload: movie});
    this.props.history.push('/details');
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <>
        <h1>Home</h1>
        <ul>
          {this.state.movieList.map(movie => (
            <button
              key={movie.id}
              onClick={() => this.handleClick(movie)}
            >
              {movie.title}
            </button>
          ))}
        </ul>
      </>
    );
  }
}

export default connect()(Home);
