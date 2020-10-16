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
    // console.log(snapshots,name)
    useEffect(() => {
        let interval = setTimeout(() => {
            if (name == "Bubble Sort") {
                if (countObj.bubbleSort < snapshots.length - 1) {
                    setCount(preObj => {
                        return { ...preObj, bubbleSort: preObj.bubbleSort + 1 }
                    })
                }
            }
            else {
                if (countObj.selectionSort < snapshots.length - 1) {
                    setCount(preObj => {
                        return { ...preObj, selectionSort: preObj.selectionSort + 1 }
                    })
                }
            }
        }, 200);
        return () => clearInterval(interval)
    }, [name=="Bubble Sort"?countObj.bubbleSort:countObj.selectionSort])

    const data = {
        labels: snapshots[snapshots.length - 1],
        datasets: [
            {
                label: `Data Points`,
                data: snapshots[name=="Bubble Sort"?countObj.bubbleSort:countObj.selectionSort],
                fill: true,
                borderColor: "rgb(75,192,192,1)"
            }
        ]
    };

    return (
        <div className={css`display:inline-block; width: 46vw; height: 46vh;margin:1vw;`}>
            <Paper>
                <h1 className={css`text-align:center;`}>{name}</h1>
                <Typography>Iterations: {name=="Bubble Sort"?countObj.bubbleSort:countObj.selectionSort}</Typography>
            </Paper>
            <Paper className={css`display:flex;align-items:center;justify-content:center;border-radius:1vw;width:inherit;height:inherit;`}>
                {/* maintainAspectRatio should be set to false to make responsive chart of our own size  */}
                <Bar data={data} options={{ maintainAspectRatio: false }} />
            </Paper>
        </div>
    )
}