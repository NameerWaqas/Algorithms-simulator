import React, { useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { context } from '../context';
import { Paper, Card, Typography } from '@material-ui/core';
import {css} from 'emotion';

export default function SearchingBarChart(props) {
    let contextData = useContext(context);
    let { snapshots, name } = props;
    let countObj = contextData[2];
    let setCountObj = contextData[3];
    let dataToSearch = contextData[4];
    let iterationCounter = countObj.linearSearch;

    // useEffect(() => {

    //     let interval = setTimeout(() => {
    //         if (countObj.linearSearch < snapshots.length) {
    //             setCountObj(preVal => {
    //                 return { ...preval, linearSearch: preVal.linearSearch + 1 }
    //             })
    //         }
    //     }, 200);

    //     return () => clearInterval(interval)
    // }, [countObj.linearSearch])

    // let generateColorScheme=()=>{

    // }

    const data = {
        labels:dataToSearch.values,
        datasets:[
            {
                label:"Data Points",
                data : dataToSearch.values,
                backgroundColor:'red',
                borderColor: "rgb(75,192,192,1)",
            }
        ]
    }

    return (
        <div className={css`display:inline-block; width: 46vw; height: 46vh;margin:1vw;`}>
            <Paper>
                <h1 className={css`text-align:center;`}>{name}</h1>
                <Typography>Iterations: {iterationCounter}</Typography>
            </Paper>
            <Paper className={css`display:flex;align-items:center;justify-content:center;border-radius:1vw;width:inherit;height:inherit;`}>
                {/* maintainAspectRatio should be set to false to make responsive chart of our own size  */}
                <Bar data={data} options={{ maintainAspectRatio: false }} />
            </Paper>
        </div>
    )
}