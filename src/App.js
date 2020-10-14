import React from 'react';
import BubbleSortChart from './components/BubbleSortChart'
import ContextProvider from './context'
import LandingPage from './containers/landingPage'

function App() {
  return (
    <ContextProvider>
      <LandingPage/>
      <BubbleSortChart />
    </ContextProvider>
  );
}

export default App;
