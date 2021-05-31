import React from 'react';
import './App.css';
import AddMovie from '../AddMovie/AddMovie.jsx';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  console.log('App is rendering');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });

  }, []);


  return (
    <div className="App">
      <h1>The Movies Saga</h1>

      <Router>

        <Button variant="dark"><Link to="/">Home</Link></Button>
        <Button variant="dark"><Link to="/movie">Add Movie</Link></Button>


        {/* <NavbarBrand href='/'>Home</NavbarBrand>
        <NavbarBrand href='/movie'>Add Movie</NavbarBrand> */}


        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/details/:movieId">
            <Details />

          </Route>
          <Route path='/movie'><AddMovie /></Route>


        </Switch>


      </Router >
    </div >
  );
}


export default App;
