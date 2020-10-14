import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2'
import BubbleSort from '../Algorithms/BubbleSort'
import { context } from '../context'

// const generateColors = (list) => {

//     let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'grey', 'purple', 'pink', 'brown', 'teal']
//     let colorList = list.slice()
//     list.map((num, ind) => {
//         colorList[ind] = colors[num]
//     })
//     return colorList
// }

function BubbleSortChart() {
    let contextData = useContext(context)
    let dataToSort = contextData[0];
    let count = contextData[2];
    let setCount = contextData[3];   

    // here slice() is called to make copy of the array;
    let BubbleSortSnapshots = BubbleSort(dataToSort.slice());
    console.log(BubbleSortSnapshots);
    useEffect(() => {
        let interval = setTimeout(() => {
            if (count < BubbleSortSnapshots.length - 1) {
                setCount(prevCount => prevCount + 1)
                // console.log(i)
            }
        }, 100);
        return () => clearInterval(interval)
    }, [count])


    const data = {
        labels: BubbleSortSnapshots[BubbleSortSnapshots.length - 1],
        datasets: [
            {
                label: "First dataset",
                data: BubbleSortSnapshots[count],
                fill: false,
                // backgroundColor: generateColors(BubbleSortSnapshots[i]),
                borderColor: "rgb(75,192,192,1)"
            }
        ]
    };

    return (
        <div style={{ width: '40%', height: '50vh' }}>
            {/* maintainAspectRatio should be set to false to make responsive chart of our own size  */}
            <Bar data={data} options={{ maintainAspectRatio: false }} />
        </div>
    );
}

export default BubbleSortChart;
