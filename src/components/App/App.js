import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={Details} />
          <Route path="/edit" exact component={Edit} />
        </>
      </Router>
    );
  }
}

export default App;
