import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { css } from 'emotion'
import { Card, Typography, Paper } from '@material-ui/core'
import { context } from '../context';

export default function BarChartComponent(props) {
    let contextData = useContext(context)
    let { snapshots,name } = props;
    console.log(snapshots)
    let count = contextData[2]
    useEffect(() => {
        let interval = setTimeout(() => {
            if (count < snapshots.length) {
                // setCount(prevCount => prevCount + 1)
                ++count
            }
        }, 100);
        return () => clearInterval(interval)
    }, [count])

    const data = {
        labels: snapshots[snapshots.length - 1],
        datasets: [
            {
                label: `Data Points`,
                data: snapshots[count],
                fill: false,
                borderColor: "rgb(75,192,192,1)"
            }
        ]
    };

    return (
        <div className={css`display:inline-block; width: 46vw; height: 46vh;margin:1vw;`}>
            <Paper className={css`display:flex;align-items:center;justify-content:center;border-radius:1vw;width:inherit;height:inherit;`}>
                <Card className={css`height:95%;width:99%; overflow:hidden;`}>
                    <h1 className={css`text-align:center;`}>{name}</h1>
                    <Typography>Time Complexity: O(n<sup>2</sup>), Current Iterations: {count}</Typography>
                    {/* maintainAspectRatio should be set to false to make responsive chart of our own size  */}
                    <Bar data={data} options={{ maintainAspectRatio: false }} />
                </Card>
            </Paper>
        </div>
    )
}