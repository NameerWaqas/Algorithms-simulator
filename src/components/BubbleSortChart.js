import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2'
import BubbleSort from '../Algorithms/BubbleSort'
import { context } from '../context';
import { css } from 'emotion'
import { Card, Typography,Paper } from '@material-ui/core'

function BubbleSortChart() {
    let contextData = useContext(context)
    let dataToSort = contextData[0];
    let count = contextData[2];
    let setCount = contextData[3];

    // here slice() is called to make copy of the array;
    let BubbleSortSnapshots = BubbleSort(dataToSort.slice());

    useEffect(() => {
        let interval = setTimeout(() => {
            if (count < BubbleSortSnapshots.length - 1) {
                setCount(prevCount => prevCount + 1)
            }
        }, 100);
        return () => clearInterval(interval)
    }, [count])


    const data = {
        labels: BubbleSortSnapshots[BubbleSortSnapshots.length - 1],
        datasets: [
            {
                label: "Data Points",
                data: BubbleSortSnapshots[count],
                // data: BubbleSortSnapshots[BubbleSortSnapshots.length-1],
                fill: false,
                // backgroundColor: generateColors(BubbleSortSnapshots[i]),
                borderColor: "rgb(75,192,192,1)"
            }
        ]
    };
    return (
        <div className={css`display:inline-block; width: 46vw; height: 46vh;margin:1vw;`}>
            <Paper className={css`display:flex;align-items:center;justify-content:center;border-radius:1vw;width:inherit;height:inherit;`}>
                {/* <h1 className={css`text-align:center;`}>Bubble Sort</h1> */}
                {/* <Card className={css`height:95%;width:99%; overflow:hidden;`}> */}
                    {/* maintainAspectRatio should be set to false to make responsive chart of our own size  */}
                    <Bar data={data} options={{ maintainAspectRatio: false }} />
                {/* </Card> */}
            </Paper>
        </div>
    );
}

export default BubbleSortChart;
