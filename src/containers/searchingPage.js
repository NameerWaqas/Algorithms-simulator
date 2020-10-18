import React from 'react';
import LinearSearchChart from '../components/Searching/LinearSearchChart';
import { css } from 'emotion';
import { TextField, Button } from '@material-ui/core';
import BinarySearchChart from '../components/Searching/BinarySearchChart';


export default function SearchingContainer(props) {
    return (
        <>
            <SearchingDataInputComponent />
            <LinearSearchChart />
            <BinarySearchChart/>
        </>
    )
}

function SearchingDataInputComponent(props) {

    let handleChange = () => {

    }

    let handleUpdateData = () => {

    }

    return (
        <>
            {/* Input componet for taking data */}
            <div className={css`display:flex;flex-direction:row;margin-top:1vh;`}>
                <section className={css`flex:6;`}>
                    <TextField id='standard-basic' label='Enter data here' onChange={handleChange} fullWidth variant="outlined"
                        placeholder="Enter comma seprated values only like: 1,2,3,4" />
                </section>
                <section className={css`flex:3;`}>
                    <TextField id='standard-basic' label='Enter data here' onChange={handleChange}fullWidth variant="outlined" 
                        placeholder="Enter comma seprated values only like: 1,2,3,4" />
                </section>
                <section className={css`flex:1; margin-left:1%;margin-right:1%;`}>
                    <Button variant='contained' color='primary' 
                    className={css`width:100%;height:98%;`}
                        onClick={handleUpdateData}>Search</Button>
                </section>
            </div>
        </>
    )
}