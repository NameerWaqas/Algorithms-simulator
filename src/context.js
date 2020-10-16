import React, { useState } from 'react';

export const context = React.createContext()

export default function ContextProvider(props) {
    let [data, setData] = useState("3, 2, 5, 4, 1, 6, 8, 7, 9")
    let [count,setCount] = useState({
        bubbleSort:0
    })
    return (
        <context.Provider value={[data, setData,count,setCount]}>
            {props.children}
        </context.Provider>
    )
}