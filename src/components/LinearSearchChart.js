import React,{useContext} from 'react';
import LinearSearch from '../Algorithms/Searching/LinearSearch';
import {context} from '../context';
import SearchingBarChart from './SearchingBarChart';

export default function LinearSearchChart(props){
    let contextData = useContext(context);
    let dataToSearch = contextData[4];
    let linearSearchSnapshots = LinearSearch(dataToSearch.values,dataToSearch.valToSearch)
    return(
        <SearchingBarChart snapshots = {linearSearchSnapshots} name = "Linear Search"/>
    )
}