import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { css } from 'emotion';
import { Card, Typography, Paper } from '@material-ui/core';
import { context } from '../../context';

export default function BarChartComponent({ snapshots, name }) {
    let contextData = useContext(context);
    let countObj = contextData[2];
    let setCount = contextData[3];
    //Since this is a resuable componet so the ternary operator is the trade-off.
    let iterationCounter = name == "Bubble Sort" ? countObj.bubbleSort : name == "Selection Sort" ?
        countObj.selectionSort : name == "Insertion Sort" ? countObj.insertionSort : countObj.cocktailSort;

    // UseEffect hook is used for updating the chart(s) periodically.
    useEffect(() => {
        let interval = setTimeout(() => {
            // Here conditional operators are the trade-off to reuse logic b/w multiple sorting charts.

            if (name == "Bubble Sort") {
                //countObj here holds the value of bubbleSort key saved in the context and increamenting it to change the..
                //..data in the array(snapshots). 
                if (countObj.bubbleSort < snapshots.length - 1) {
                    setCount(preObj => {
                        return { ...preObj, bubbleSort: preObj.bubbleSort + 1 };
                    })
                }
            }
            else if (name == "Selection Sort") {
                if (countObj.selectionSort < snapshots.length - 1) {
                    setCount(preObj => {
                        return { ...preObj, selectionSort: preObj.selectionSort + 1 };
                    })
                }
            }
            else if (name == "Insertion Sort") {
                if (countObj.insertionSort < snapshots.length - 1) {
                    setCount(preObj => {
                        return { ...preObj, insertionSort: preObj.insertionSort + 1 };
                    })
                }
            }
            else {
                if (countObj.cocktailSort < snapshots.length - 1) {
                    setCount(preObj => {
                        return { ...preObj, cocktailSort: preObj.cocktailSort + 1 };
                    })
                }
            }
        }, 200);
        return () => clearInterval(interval)
    }, [iterationCounter])

    const data = {
        //labels key holds the value of the labels on x-axis of the chart.
        labels: snapshots[snapshots.length - 1],
        datasets: [
            {
                label: `Data Points`,
                //Here data will change periodically as counter value increases.
                data: snapshots[iterationCounter],
                fill: true,
                backgroundColor: '#bee3db',
                borderColor: "rgb(75,192,192,1)"
            }
        ]
    };

    return (
        <div className={css`display:inline-block; width: 45vw; height: 46vh;margin:1vw;`}>
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