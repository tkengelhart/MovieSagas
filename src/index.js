import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
//example from bookList

const detailsReducer = (state = {}, action) => {
    // Manages what movie we want to load into the moviedetails page.
    if (action.type === 'SET_DETAILS') {
        return action.payload;
    } else if (action.type === 'CLEAR_DETAILS') {
        return {} // clears the state back to an empty object
    }
    return state;
}

//sagas

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
}

function* fetchGenres() {
    // get all genres from DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch (error) {
        console.log('Error in SET_GENRES', error);
    };
};

// postGenreSaga
function* addGenres(action) {
    try {
        yield axios.post('/api/genre', action.payload);
        yield put({ type: 'FETCH_GENRES' });
    } catch (error) {
        console.log(`Error fetching genres/POST`, error);
    }
}


function* addMovie(action) {
    try {
        yield axios.post('/api/movie', action.payload);
        yield put({ type: 'FETCH_MOVIES' });
    } catch (error) {
        console.log(`Error fetching movies`, error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_GENRES', addGenres);

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        detailsReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
