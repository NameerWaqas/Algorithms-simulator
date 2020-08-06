import React, { useState, useEffect } from 'react';
import './App.css';
import { Bar } from 'react-chartjs-2'
import BubbleSort from './Algorithms/BubbleSort'
const generateColors =(list)=>{

  let colors = ['red','green','blue','orange','yellow','grey','purple','pink','brown','teal']
  let colorList = list.slice()
  list.map((num,ind)=>{
    colorList[ind] = colors[num]
  })
  return colorList
}

function App() {
  let dataToSort = [6, 4, 5, 8, 7, 1, 0, 9, 2, 3]
  let [i, setI] = useState(() => 0)
  let BubbleSortSnapshots = BubbleSort(dataToSort.slice())

  useEffect(() => {
    let interval = setTimeout(() => {
      if (i < BubbleSortSnapshots.length-1) {
        setI(prevI => prevI + 1)
        console.log(i)
      }
    }, 2000);
    return () => clearInterval(interval)
  }, [i])


  const data = {
    labels: ['*','*','*','*','*','*','*','*','*','*'],
    datasets: [
      {
        label: "First dataset",
        data: BubbleSortSnapshots[i],
        fill: false,
        backgroundColor:generateColors(BubbleSortSnapshots[i]) ,
        borderColor: "rgb(75,192,192,1)"
      }
    ]
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Algorithm Simulator.</h1>
      {/* <div > */}
      <Bar data={data} />
      {/* </div> */}

    </div>
  );
}

export default App;
