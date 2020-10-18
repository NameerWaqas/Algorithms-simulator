import React, { useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { context } from '../../context';
import { Paper, Card, Typography, rgbToHex } from '@material-ui/core';
import { css } from 'emotion';

export default function SearchingBarChart({ snapshots, name }) {
    let contextData = useContext(context);
    let countObj = contextData[2];
    let setCountObj = contextData[3];
    let dataToSearch = contextData[4];
    let dataToSearchArr = dataToSearch.values.split(',');
    dataToSearchArr = dataToSearchArr.map(x=>parseInt(x))
    let iterationCounter = name=="Linear Search"? countObj.linearSearch:countObj.binarySearch;

    useEffect(() => {
        let interval = setTimeout(() => {
            if(name=="Linear Search"){
                if (countObj.linearSearch < snapshots.values.length - 1) {
                    setCountObj(preVal => {
                        return { ...preVal, linearSearch: preVal.linearSearch + 1 }
                    })
                }
            }
            else{
                if (countObj.binarySearch < snapshots.values.length - 1) {
                    setCountObj(preVal => {
                        return { ...preVal, binarySearch: preVal.binarySearch + 1 }
                    })
                }
            }
        }, 200);

        return () => clearInterval(interval)
    }, [iterationCounter])

    let generateColorScheme = () => {
        let colorScheme = dataToSearchArr.map((x) => {
            if (x === snapshots.values[iterationCounter] && snapshots.status[iterationCounter]) {
                return "rgb(0,255,0)"
            }
            else if (x == snapshots.values[iterationCounter] && !snapshots.status[iterationCounter]) {
                return "rgb(255,0,0)";
            }
            else {
                return "#bee3db";
            }
        })
        return colorScheme
    }

    const data = {
        labels: dataToSearchArr,
        datasets: [
            {
                label: "Data Points",
                data: dataToSearchArr,
                backgroundColor: generateColorScheme(),
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