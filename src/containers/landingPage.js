import React, { useContext } from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import { context } from '../context';

export default function LandingPage(props) {
    let contextData = useContext(context)
    let  setData  = contextData[1];
    let  setCount = contextData[3]
    let newData;

    let handleChange = (e) => {
        newData = e.target.value.split(',')
        // console.log(newData)
    }

    let handleUpdateData = ()=>{
        setCount(0)
        setData(newData);
    }
    return (
        <>
        {/* Input componet for taking data */}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <section style={{flex:9}}>
                    <TextField id='standard-basic' label='Enter data here' onChange={handleChange}
                        placeholder="Enter comma seprated values only like: 1,2,3,4" fullWidth/>
                </section>
                <section style={{flex:1,height:'100%',alignSelf:'center'}}>
                <Button variant='contained' color='primary' fullWidth
                onClick={handleUpdateData}>Sort Data</Button>
                </section>
            </div>
        </>
    )
}