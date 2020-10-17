import React, { useState, useEffect, useContext } from 'react';
import BubbleSort from '../Algorithms/Sorting/BubbleSort'
import { context } from '../context';
import BarChartComponent from "./SortingBarChart";

export default function BubbleSortChart(props) {
    let contextData = useContext(context)
    let dataToSort = contextData[0];

    // here slice() is called to make copy of the array;
    let BubbleSortSnapshots = BubbleSort(dataToSort.slice());
    console.log(BubbleSortSnapshots,"Bubble")

    return (
        <BarChartComponent snapshots={BubbleSortSnapshots} name="Bubble Sort"/>
    );
}

