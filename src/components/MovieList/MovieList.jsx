import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Card, CardColumns } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './MovieList.css'
import Details from '../Details/Details';

function MovieList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);
    const currentMovie = useSelector(store => store.movies);

    const setMovieDetails = (movie) => {
        dispatch({
            type: 'SET_DETAILS',
            payload: movie,
        });
        history.push(`/details/${movie.id}`);
    }

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);

    return (
        <div>
            <h1>MovieList</h1>
            Current Movie: {currentMovie.title ? currentMovie.title : 'None Selected'}

            <CardColumns >
                <Card style={{ width: '18rem' }}>

                    {movies.map(movie => {
                        return (
                            <Card key={movie.id} >

                                <h3>{movie.title}</h3>

                                <Card.Img src={movie.poster} alt={movie.title} onClick={() => setMovieDetails(movie)}></Card.Img>

                                {/* <Button onClick={() => history.push(`/details/${movie.id}`)}>View Details 2</Button> */}

                            </Card>
                        );
                    })}
                </Card>
            </CardColumns >

        </div>
    );
}
export default MovieList;


