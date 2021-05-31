import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { CardColumns, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../App/App.css';


function Details() {

    const movieList = useSelector(store => store.movies);
    const genreList = useSelector(store => store.genres)
    const details = useSelector(store => store.detailsReducer);

    const history = useHistory();

    let params = useParams();
    console.log(params);

    let movieId = params.movieId; // :id is set up in App.js
    let genreId = params.genreId


    let movie = movieList.find(movie => movie.id === Number(movieId));
    console.log(params.movieId);
    console.log(`found movie: `, movie);



    if (!movie) {
        return <h2>Invalid movie ID</h2>;
    }


    const backButton = (event) => {
        history.push('/');
    };


    return (
        <Card className="center-card" style={{ width: '50rem' }} border="light">
            <Card.Header>Movie Details</Card.Header>
            <br></br>
            <Card.Title>Movie Title: {movie.title}</Card.Title>
            <Card.Body>Description: {movie.description}</Card.Body>
            <Card.Body>Genres: {details.genre}</Card.Body>
            <Card.Footer>Movie ID: {movie.id}</Card.Footer>

            <Button onClick={(event) => backButton()}>Back to Movies</Button>
        </Card>

    );
}

export default Details;