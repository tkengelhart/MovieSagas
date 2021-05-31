import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Dropdown, FormText } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useState } from 'react';


function AddMovie(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [genre, setGenre] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Adding movie`, { title, url, description, genre });

        dispatch({
            type: 'ADD_MOVIE',
            payload: { movie: movieTitle, url: movieUrl, description: movieDescription }
        });
    }

    const cancelButton = event => {
        history.push("/")
    }

    return (
        <div>
            <FormText onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="Movie Title"
                    value={movie}
                    onChange={(event) => setTitle(event.target.value)}>
                </input>

                <input
                    required
                    type="url"
                    placeholder="Movie Poster URL"
                    value={movieUrl}
                    onChange={(event) => setUrl(event.target.value)}>
                </input>

                <textarea
                    required
                    type="text"
                    placeholder="Movie Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}>
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
            </FormText >

            <button onClick={(event) => cancelButton(event)}>Cancel</button>
            <button type="submit">Add Movie</button>
        </div >
    )
}

export default AddMovie;
