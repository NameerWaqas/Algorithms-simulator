import React from 'react';
import './App.css';
import BubbleSortChart from './components/BubbleSortChart'
import ContextProvider from './context'


function App() {
  return (
    <ContextProvider>
      <BubbleSortChart />
    </ContextProvider>
  );
}

export default App;
