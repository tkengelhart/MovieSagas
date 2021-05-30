import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Details() {
    const movie = useSelector(store => store.movies);
    const dispatch = useDispatch();
    const history = useHistory();


    const setMovieDetails = (movie) => {

        dispatch({
            type: 'SET_DETAILS',
            payload: movie,
        });

        history.push('/details');
    }

    return (
        <section>
            <h2>All Movies</h2>

      Current Movie: {movie.title ? movie.title : 'None Selected'}
            <ul>
                {movie.map((item, index) =>
                    <li key={index}>{item.title}

                        <button onClick={() => setMovieDetails(movie)}>View Details</button>

                        <button onClick={() => history.push(`/details/${item.id}`)}>View Details 2</button>
                    </li>
                )}
            </ul>

        </section>
    );
}

export default Details;