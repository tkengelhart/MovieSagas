import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardDeck, CardGroup } from 'react-bootstrap';
import { Card, CardColumns } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    // const currentMovie = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
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



    return (
        <div>
            <h1>MovieList</h1>
            {/* Current Movie: {currentMovie.title ? currentMovie.title : 'None Selected'} */}

            <CardGroup style={{ width: '20rem' }} >

                <Card border="light" style={{ width: '20rem' }}>

                    {movies.map(movie => {
                        return (
                            <Card key={movie.id} >

                                <Card.Header>{movie.title}</Card.Header>

                                <Card.Img src={movie.poster} alt={movie.title} onClick={() => setMovieDetails(movie)}></Card.Img>


                            </Card>
                        );
                    })}

                </Card>

            </CardGroup >

        </div >
    );
}
export default MovieList;


