import React, { useContext } from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import { context } from '../context';
import {css} from 'emotion';

export default function LandingPage(props) {
    let contextData = useContext(context)
    let  setData  = contextData[1];
    let  setCount = contextData[3]
    let newData;

    let handleChange = (e) => {
        newData = e.target.value.split(',')
    }

    let handleUpdateData = ()=>{
        setCount(0)
        setData(newData);
    }
    return (
        <>
        {/* Input componet for taking data */}
            <div className={css`display:flex;flex-direction:row;`}>
                <section className={css`flex:9;`}>
                    <TextField id='standard-basic' label='Enter data here' onChange={handleChange}
                        placeholder="Enter comma seprated values only like: 1,2,3,4" fullWidth/>
                </section>
                <section className={css`flex:1;height:100%;align-self:center;`}>
                <Button variant='contained' color='primary' fullWidth
                onClick={handleUpdateData}>Sort Data</Button>
                </section>
            </div>
        </>
    )
}