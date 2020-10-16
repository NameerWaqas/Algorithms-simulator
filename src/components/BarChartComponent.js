import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { css } from 'emotion'
import { Card, Typography, Paper } from '@material-ui/core'
import { context } from '../context';

export default function BarChartComponent(props) {
    let contextData = useContext(context)
    let { snapshots, name } = props;
    let countObj = contextData[2]
    let setCount = contextData[3]
    useEffect(() => {
        let interval = setTimeout(() => {
            if (countObj.bubbleSort < snapshots.length - 1) {
                setCount(preObj => {
                    return { ...preObj, bubbleSort: preObj.bubbleSort + 1 }
                })
            }
        }, 100);
        return () => clearInterval(interval)
    }, [countObj.bubbleSort])

    const data = {
        labels: snapshots[snapshots.length - 1],
        datasets: [
            {
                label: `Data Points`,
                data: snapshots[countObj.bubbleSort],
                fill: false,
                borderColor: "rgb(75,192,192,1)"
            }
        ]
    };

    return (
        <div className={css`display:inline-block; width: 46vw; height: 46vh;margin:1vw;`}>
            <Paper>
                <h1 className={css`text-align:center;`}>{name}</h1>
                <Typography>Iterations: {countObj.bubbleSort}</Typography>
            </Paper>
            <Paper className={css`display:flex;align-items:center;justify-content:center;border-radius:1vw;width:inherit;height:inherit;`}>
                {/* maintainAspectRatio should be set to false to make responsive chart of our own size  */}
                <Bar data={data} options={{ maintainAspectRatio: false }} />
            </Paper>
        </div>
    )
}