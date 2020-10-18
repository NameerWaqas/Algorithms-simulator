import React, { useContext, useState } from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import { context } from '../context';
import { css } from 'emotion';
import BubbleSortChart from '../components/Sorting/BubbleSortChart';
import SelectionSortChart from '../components/Sorting/SelectionSortChart';
import InsertionSortChart from '../components/Sorting/InsertionSortChart'
import CocktailSortChart from '../components/Sorting/CocktailSortChart';

export default function SortingContainer(props) {
    return (
        <>
            {/* Top level component for this container for giving input data at run time */}
            <InputDataComponent />
            {/* All sorting algorithm charts showing how the algorithm sort the values */}
            <BubbleSortChart />
            <SelectionSortChart />
            <InsertionSortChart />
            <CocktailSortChart/>
        </>
    )
}

function InputDataComponent(props) {
    let contextData = useContext(context)
    let data = contextData[0];
    let setData = contextData[1];
    let setCount = contextData[3];
    let [newData, setNewData] = useState(data);

    let handleChange = (e) => {
        setNewData(e.target.value);
        console.log(newData)
    }

    let handleUpdateData = () => {
        setData(newData);
        setCount(prevObj => {
            return { ...prevObj, bubbleSort: 0, selectionSort: 0, insertionSort: 0,cocktailSort:0 }
        })
    }
    return (
        <>
            {/* Input componet for taking data */}
            <div className={css`display:flex;flex-direction:row;margin-top:1vh;`}>
                <section className={css`flex:8;`}>
                    <TextField id='standard-basic' label='Enter data here' onChange={handleChange} fullWidth variant="outlined"
                        placeholder="Enter comma seprated values only like: 1,2,3,4" />
                </section>
                <section className={css`flex:1; margin-left:1%;margin-right:1%;`}>
                    <Button variant='contained' color='primary' 
                    className={css`width:100%;height:98%;`}
                        onClick={handleUpdateData}>Sort</Button>
                </section>
            </div>
        </>
    )
}