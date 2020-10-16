import React, { useState, useEffect, useContext } from 'react';
import BubbleSort from '../Algorithms/BubbleSort'
import { context } from '../context';
import BarChartComponent from "./BarChartComponent";

function BubbleSortChart() {
    let contextData = useContext(context)
    let dataToSort = contextData[0];

    // here slice() is called to make copy of the array;
    let BubbleSortSnapshots = BubbleSort(dataToSort.slice());

    return (
        <BarChartComponent snapshots={BubbleSortSnapshots} name="Bubble Sort"/>
    );
}



export default BubbleSortChart;
