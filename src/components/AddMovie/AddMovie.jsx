import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react'; import React from 'react';


function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [genre, setGenre] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');


    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Adding movie`, { title, poster, description, genre });

        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description,
                genre_id: genre

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
                    type="text"
                    placeholder="Movie Poster URL"
                    value={poster}
                    onChange={(event) => setPoster(event.target.value)}>
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
                    <option value='0'>Select Genre</option>
                    <option value='1'>Adventure</option>
                    <option value='2'>Animated</option>
                    <option value='3'>Biographical</option>
                    <option value='4'>Comedy</option>
                    <option value='5'>Disaster</option>
                    <option value='6'>Drama</option>
                    <option value='7'>Epic</option>
                    <option value='8'>Fantasy</option>
                    <option value='9'>Musical</option>
                    <option value='10'>Romantic</option>
                    <option value='11'>Science Fiction</option>
                    <option value='12'>Space-Opera</option>
                    <option value='13'>Superhero</option>

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
