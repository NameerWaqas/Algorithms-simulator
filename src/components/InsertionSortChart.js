import React,{useContext} from 'react';
import InsertionSort from '../Algorithms/Sorting/InsertionSort';
import BarChartComponent from './BarChartComponent';
import {context} from '../context';

export default function InsertionSortChart(props){
    let contextData = useContext(context)
    let dataToSort = contextData[0];
    let InsertionSortSnapshots = InsertionSort(dataToSort)
    return(
        <BarChartComponent snapshots={InsertionSortSnapshots} name="Insertion Sort"/>
    )
}