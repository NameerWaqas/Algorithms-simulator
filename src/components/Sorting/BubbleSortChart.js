import React, { useState, useEffect, useContext } from 'react';
// Bubble Sort algorithm 
import BubbleSort from '../../Algorithms/Sorting/BubbleSort';
import { context } from '../../context';
// Resuable component that shares same logic accross all sorting charts
import BarChartComponent from "./SortingBarChart";

export default function BubbleSortChart(props) {
    let contextData = useContext(context)
    let dataToSort = contextData[0];
    // here slice() is called to make copy of the array because of array's reference type;
    let BubbleSortSnapshots = BubbleSort(dataToSort.slice());

    return (
        // snapshots prop holds the array of arrays that are return by the algorithm to achieve simulating effect.
        <BarChartComponent snapshots={BubbleSortSnapshots} name="Bubble Sort"/>
    );
}

