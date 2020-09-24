import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListMovies from './components/Movies/ListMovies';
import ListShifts from './components/Shifts/ListShifts';

import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies">
          <ListMovies/>
        </Route>
        <Route exact path="/shifts">
          <ListShifts/>
        </Route>
      </Switch>
    </Router>
  );
}
