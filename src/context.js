import React, { useState } from 'react';

export const context = React.createContext()

export default function ContextProvider(props) {
    let [dataToSort, setDataToSort] = useState("3, 2, 5, 4, 1, 6, 8, 7, 9");
    let [dataToSearch,setDataToSearch]=useState({
        values:"1,3,5,7,9,2,4,6,8",
        valueToSearch:"9"
    })
    let [count,setCount] = useState({
        bubbleSort:0,
        selectionSort:0,
        insertionSort:0,
        linearSearch:0
    })
    return (
        <context.Provider value={[dataToSort, setDataToSort,count,setCount,dataToSearch,setDataToSearch]}>
            {props.children}
        </context.Provider>
    )
}