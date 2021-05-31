import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardDeck, CardGroup, Row } from 'react-bootstrap';
import { Card, CardColumns } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    // const currentMovie = useSelector(store => store.movies);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);

    const setMovieDetails = (movie) => {
        dispatch({
            type: 'SET_DETAILS',
            payload: movie,
        });
        history.push(`/details/${movie.id}`);
    }

    const setMovieGenre = (genre) => {
        dispatch({
            type: 'SET_GENRES',
            payload: genre,
        });
    }



    return (
        <div>
            <h1>Movie List</h1>
            {/* Current Movie: {currentMovie.title ? currentMovie.title : 'None Selected'} */}

            {movies.map(movie => {
                return (
                    <Card key={movie.id} className="columns" style={{ width: '20rem' }} border="light" >
                        {/* <Card border="light" style={{ width: '15rem' }}> */}
                        <Card.Header>{movie.title}</Card.Header>
                        <Card.Img src={movie.poster} alt={movie.title} onClick={() => setMovieDetails(movie)}></Card.Img>
                        <br></br>
                        <br></br>
                    </Card>


                );
            })}

        </div >
    );
}
export default MovieList;


