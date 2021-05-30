import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import bootstrap from 'bootstrap';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import { NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga</h1>
      <NavbarBrand href="/">Home</NavbarBrand>
      <NavbarBrand href="/add">Add Movie</NavbarBrand>

      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/add" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
