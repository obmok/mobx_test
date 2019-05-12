import React, { Component } from 'react'
import {hot} from 'react-hot-loader';
import RepositoriesPage from './components/routes/repositories'
import UsersPage from './components/routes/users'
import { Router, Route, NavLink, Switch} from 'react-router-dom'
import customHistory from './history'
import './index.css';

class App extends Component {

  render() {
    return (
      <div>
        <Router history={customHistory}>
          <div className="head">
            <span className="heading">Github data viewer</span>
            <nav>
              <NavLink to="/repositories" activeClassName="linkActive">Repositories</NavLink>
              <NavLink to="/users" activeClassName="linkActive">Users</NavLink>
            </nav>
          </div>
          <Switch>
                <Route path="/repositories" component={RepositoriesPage} />
                <Route path="/users" component={UsersPage} />
            </Switch>
        </Router>
      </div>
    )
  }
}

export default hot(module)(App);