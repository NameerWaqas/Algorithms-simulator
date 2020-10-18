import React from 'react';
import './app.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import ContextProvider from './context'
import NavBar from './containers/navbar';
import SortingContainer from './containers/sortingPage'
import SearchingContainer from './containers/searchingPage';

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <NavBar />
        <Switch>
          <Router exact path='/'>
              <h1>Landing Page</h1>
          </Router>
          <Route exact path='/sorting'>
            <SortingContainer />
          </Route>
          <Route path='/searching'>
            <SearchingContainer />
          </Route>
        </Switch>
      </ContextProvider>
    </Router>
  );
}
