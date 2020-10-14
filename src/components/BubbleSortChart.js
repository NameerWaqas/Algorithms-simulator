import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2'
import BubbleSort from '../Algorithms/BubbleSort'
import { context } from '../context';
import {css} from 'emotion'
import { Card, CardContent } from '@material-ui/core'

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
                // console.log(i)
            }
        }, 100);
        return () => clearInterval(interval)
    }, [count])


    const data = {
        labels: BubbleSortSnapshots[BubbleSortSnapshots.length - 1],
        datasets: [
            {
                label: "First dataset",
                data: BubbleSortSnapshots[count],
                fill: false,
                // backgroundColor: generateColors(BubbleSortSnapshots[i]),
                borderColor: "rgb(75,192,192,1)"
            }
        ]
    };
    return (
        <div className={css` width: 45vw; height: 50vh;margin:1vw`}>
            <Card className={css`height:inherit;`}>
                {/* maintainAspectRatio should be set to false to make responsive chart of our own size  */}
                <Bar data={data} options={{ maintainAspectRatio: false }} />
            </Card>
        </div>
    );
}

export default BubbleSortChart;
