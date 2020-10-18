import React, { useState } from 'react';

export const context = React.createContext()

export default function ContextProvider(props) {
    let [dataToSort, setDataToSort] = useState("3, 2, 5, 4, 1, 6, 8, 7, 9");
    let [dataToSearch,setDataToSearch]=useState({
        values:"-10,-7,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30",
        valueToSearch:"29"
    })
    // Here count is the number of transitions to show in the chart at run time
    let [count,setCount] = useState({
        bubbleSort:0,
        selectionSort:0,
        insertionSort:0,
        cocktailSort:0,
        linearSearch:0,
        binarySearch:0
    })
    return (
        <context.Provider value={[dataToSort, setDataToSort,count,setCount,dataToSearch,setDataToSearch]}>
            {props.children} 
        </context.Provider>
    )
}