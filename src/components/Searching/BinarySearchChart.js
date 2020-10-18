import React, { useContext } from 'react';
import {context} from '../../context';
import BinarySearch from '../../Algorithms/Searching/BinarySearch';
import SearchingBarChart from './SearchingBarChart';

export default function BinarySearchChart(props){
    let contextData = useContext(context);
    let dataToSearch = contextData[4];
    let BinarySearchSnapshots = BinarySearch(dataToSearch.values,dataToSearch.valueToSearch);
    console.log(BinarySearchSnapshots)
    return(
        <SearchingBarChart name="Binary Search" snapshots={BinarySearchSnapshots}/>
    )
}