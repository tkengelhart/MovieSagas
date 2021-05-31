import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function Details() {


    let movies = useSelector(store => store.movies);

    let params = useParams();
    console.log(params);

    let movieId = params.movieId; // :id is set up in App.js
    let movie = movies.find(movie => movie.id === Number(movieId));
    console.log(`found movie: `, movie);

    if (!movie) {
        return <h2>Invalid movie ID</h2>;
    }

    return (
        <>
            <div>
                <h1>Movie Details</h1>

                <h2>Movie Title:</h2>
                <h2>{movie.title}</h2>

                <p>Description:</p>
                <p>{movie.description}</p>

            </div>
        </>
    );
}

export default Details;