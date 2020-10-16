import React, { useState, useEffect, useContext } from 'react';
import BubbleSort from '../Algorithms/BubbleSort'
import { context } from '../context';
import BarChartComponent from "./BarChartComponent";

function BubbleSortChart() {
    let contextData = useContext(context)
    let dataToSort = contextData[0];
    // let count = contextData[2];
    // let setCount = contextData[3];

    // here slice() is called to make copy of the array;
    let BubbleSortSnapshots = BubbleSort(dataToSort.slice());

    // useEffect(() => {
    //     let interval = setTimeout(() => {
    //         if (count < BubbleSortSnapshots.length - 1) {
    //             setCount(prevCount => prevCount + 1)
    //         }
    //     }, 100);
    //     return () => clearInterval(interval)
    // }, [count])


    // const data = {
    //     labels: BubbleSortSnapshots[BubbleSortSnapshots.length - 1],
    //     datasets: [
    //         {
    //             label: `Data Points`,
    //             data: BubbleSortSnapshots[count],
    //             // data: BubbleSortSnapshots[BubbleSortSnapshots.length-1],
    //             fill: false,
    //             // backgroundColor: generateColors(BubbleSortSnapshots[i]),
    //             borderColor: "rgb(75,192,192,1)"
    //         }
    //     ]
    // };
    return (
        <BarChartComponent snapshots={BubbleSortSnapshots} name="Bubble Sort"/>
    );
}



export default BubbleSortChart;
