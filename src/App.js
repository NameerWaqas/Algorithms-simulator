import React from 'react';
import './app.css';
import { BrowserRouter as Router, Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import ContextProvider from './context'
import LandingPage from './containers/sortingPage'
import NavBar from './containers/navbar';
import SearchingContainer from './containers/searchingPage';

function App() {
  return (
    <Router>
      <ContextProvider>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/searching'>
            <SearchingContainer/>
          </Route>
        </Switch>
      </ContextProvider>
    </Router>
  );
}

export default App;
