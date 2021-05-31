import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react'; import React from 'react';


function AddMovie() {
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
            payload: {
                title: title,
                url: url,
                description: description,
                genre: genre

            }
        });
        history.push("/")


    }

    const cancelButton = event => {
        history.push("/")
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="Movie Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}>
                </input>

                <br></br>
                <br></br>


                <input
                    required
                    type="url"
                    placeholder="Movie Poster URL"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}>
                </input>

                <br></br>
                <br></br>

                <textarea
                    required
                    type="text"
                    placeholder="Movie Description"
                    value={description}
                    rows="5"
                    columns="5"
                    onChange={(event) => setDescription(event.target.value)}>
                </textarea>

                <br></br>
                <br></br>

                <select
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

                </select>

                <br></br>
                <br></br>

                <button type="submit">Save Movie</button>

                <br></br>
                <br></br>
            </form >
            <button onClick={(event) => cancelButton(event)}>Cancel</button>

        </>
    );

}

export default AddMovie;
