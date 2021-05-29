import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Card, CardColumns } from 'react-bootstrap';

import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <div>
            <h1>MovieList</h1>

            <CardColumns >
                <Card style={{ width: '18rem' }}>

                    {movies.map(movie => {
                        return (
                            <Card key={movie.id} >
                                <h3>{movie.title}</h3>
                                <Card.Img src={movie.poster} alt={movie.title} />
                            </Card>
                        );
                    })}
                </Card>
            </CardColumns >
        </div>
    );
}
export default MovieList;


