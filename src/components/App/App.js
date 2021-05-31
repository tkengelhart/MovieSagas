import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import { NavbarBrand } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  console.log('App is rendering');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' })
  }, []);

  return (
    <div className="App">
      <h1>The Movies Saga</h1>
      <NavbarBrand href="/">Home</NavbarBrand>
      <NavbarBrand href="/add">Add Movie</NavbarBrand>

      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:movieId">
          <Details />
        </Route>
        <Route path="/add" exact>
          <AddMovie />
        </Route>
      </Router>
    </div >
  );
}


export default App;
