import React from 'react';
import './app.css'
import ContextProvider from './context'
import LandingPage from './containers/landingPage'
import NavBar from './containers/navbar';


function App() {
  return (
    <ContextProvider>
      <NavBar/>
      <LandingPage/>
    </ContextProvider>
  );
}

export default App;
