import { HashRouter as Router, Route } from 'react-router-dom';
import { NavbarBrand } from 'react-bootstrap';

import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieForm from '../AddMovie/AddMovie.jsx';


function App() {
  console.log('App is rendering');
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>The Movies Saga</h1>
      <NavbarBrand href="/">Home</NavbarBrand>
      <NavbarBrand href="/addmovie">Add Movie</NavbarBrand>

      <Router>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route path="/details/:movieId">
          <Details />
        </Route>
        <Route exact path="/addmovie">
          <MovieForm />
        </Route>
      </Router>
    </div >
  );
}


export default App;
