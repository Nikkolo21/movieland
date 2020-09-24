import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';

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
                  <NavLink activeClassName="is-active" to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/movies">Películas</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/shifts">Turnos</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/admin">Administradores</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/profile">Perfil</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/session">Cerrar sesión</NavLink>
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
