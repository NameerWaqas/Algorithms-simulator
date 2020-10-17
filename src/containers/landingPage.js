import React, { useContext, useState } from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import { context } from '../context';
import { css } from 'emotion';
import BubbleSortChart from '../components/BubbleSortChart';
import SelectionSortChart from '../components/SelectionSortChart';
import InsertionSortChart from '../components/InsertionSortChart'

export default function LandingPage(props) {
    return (
        <>
            <InputDataComponent />
            <BubbleSortChart />
            <SelectionSortChart />
            <InsertionSortChart />
        </>
    )
}

function InputDataComponent(props) {
    let contextData = useContext(context)
    let data = contextData[0];
    let setData = contextData[1];
    let setCount = contextData[3]
    let [newData, setNewData] = useState(data);

    let handleChange = (e) => {
        setNewData(e.target.value);
        console.log(newData)
    }

    let handleUpdateData = () => {
        setData(newData);
        setCount(prevObj => {
            return { ...prevObj, bubbleSort: 0, selectionSort: 0, insertionSort: 0 }
        })
    }
    return (
        <>
            {/* Input componet for taking data */}
            <div className={css`display:flex;flex-direction:row;`}>
                <section className={css`flex:9;`}>
                    <TextField id='standard-basic' label='Enter data here' onChange={handleChange}
                        placeholder="Enter comma seprated values only like: 1,2,3,4" fullWidth />
                </section>
                <section className={css`flex:1;height:100%;align-self:center;`}>
                    <Button variant='contained' color='primary' fullWidth
                        onClick={handleUpdateData}>Sort Data</Button>
                </section>
            </div>
        </>
    )
}