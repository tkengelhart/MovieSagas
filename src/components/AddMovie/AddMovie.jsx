import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';

function AddMovie(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [genre, setGenre] = useState('');

    const addMovie = (event) => {
        event.preventDefault();
        console.log(`Adding movie`, { title, description });

        dispatch({
            type: 'ADD_MOVIE',
            payload: { movie: movieTitle, url: movieUrl, description: movieDescription }
        });
    }

    const cancelButton = (event) => {
        history.push("/")
    }

    // Displays the fruit selection buttons on the DOM
    return (
        <div>
            <form onSubmit={(event) => feelingResponse(event)}>
                <input type="text" placeholder="Movie Title" value="movie">
                </input>
                <input type="url" placeholder="Movie Poster URL" value="movieUrl">
                </input>
                <textarea type="text" placeholder="Movie Description" value="description">
                </textarea>
                <Dropdown
                    required
                    onChange={(event) => setGenre(event.target.value)}>
                    <option value={''}></option>
                    <option value={'Adventure'}>Adventure</option>
                    <option value={'Animated'}>Animated</option>
                    <option value={'Biographical'}>Biographical</option>
                    <option value={'Comedy'}>Comedy</option>
                    <option value={'Disaster'}>Disaster</option>
                    <option value={'Drama'}>Drama</option>
                    <option value={'Epic'}>Epic</option>
                    <option value={'Fantasy'}>Fantasy</option>
                    <option value={'Musical'}>Musical</option>
                    <option value={'Romantic'}>Romantic</option>
                    <option value={'Science Fiction'}>Science Fiction</option>
                    <option value={'Space-Opera'}>Space-Opera</option>
                    <option value={'Superhero'}>Superhero</option>

                </Dropdown>
            </form >

            <button onClick={(event) => cancelButton(event)}>Cancel</button>
            <button onClick={(event) => addMovie(event.target.value)}>Save</button>
        </div>
    )
}

export default AddMovie;
