import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import ListMovies from './components/Movies/ListMovies';
import ListShifts from './components/Shifts/ListShifts';

import './App.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <>
          <div className="App">
            <aside>
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li>
                  <Link to="/movies">Películas</Link>
                </li>
                <li>
                  <Link to="/shifts">Turnos</Link>
                </li>
                <li>
                  <Link to="/shoelaces">Administradores</Link>
                </li>
                <li>
                  <Link to="/shoelaces">Perfil</Link>
                </li>
                <li>
                  <Link to="/shoelaces">Cerrar sesión</Link>
                </li>
              </ul>
            </aside>
            <section>
              <Route exact path="/movies">
                <ListMovies/>
              </Route>
              <Route exact path="/shifts">
                <ListShifts/>
              </Route>
            </section>
          </div>
        </>
      </Switch>
    </Router>
  );
}
