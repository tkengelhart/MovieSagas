import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardColumns, CardDeck, CardGroup, CardImg } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    // const currentMovie = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });

    }, []);

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
    //trying something from stack overflow
    const sampleStyle = {
        minWidth: "30%",
        flexGrow: 0,
    };



    return (

        <CardGroup style={sampleStyle} className="card-style">
            {movies.map(movie => {
                return (
                    <Card key={movie.id} style={sampleStyle} border="light" className="card-style">

                        <Card.Title >{movie.title}</Card.Title>

                        <CardImg src={movie.poster} alt={movie.title} onClick={() => setMovieDetails(movie)}></CardImg>

                        <br></br>
                        <br></br>

                    </Card>


                );
            })
            }
        </CardGroup>

    );
}
export default MovieList;


