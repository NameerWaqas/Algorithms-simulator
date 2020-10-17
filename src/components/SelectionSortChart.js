import React, { useContext } from 'react';
import SelectionSort from '../Algorithms/Sorting/SelectionSort';
import { context } from '../context';
import BarChartComponent from "./BarChartComponent";

export default function SelectionSortChart(props){
    let contextData = useContext(context);
    let dataToSort = contextData[0];
    let SelectionSortSnapshots = SelectionSort(dataToSort.slice());
    console.log(SelectionSortSnapshots,"select")
    return(
        <BarChartComponent  snapshots={SelectionSortSnapshots} name="Selection Sort"/>
    )
}