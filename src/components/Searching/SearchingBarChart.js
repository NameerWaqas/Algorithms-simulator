import React, { useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { context } from '../../context';
import { Paper, Card, Typography, rgbToHex } from '@material-ui/core';
import {css} from 'emotion';

export default function SearchingBarChart(props) {
    let contextData = useContext(context);
    let { snapshots, name } = props;
    let countObj = contextData[2];
    let setCountObj = contextData[3];
    let dataToSearch = contextData[4];
    let dataToSearchArr = dataToSearch.values.split(',');
    let iterationCounter = countObj.linearSearch;
    console.log(snapshots)

    useEffect(() => {

        let interval = setTimeout(() => {
            if (countObj.linearSearch < snapshots.values.length-1) {
                setCountObj(preVal => {
                    return { ...preVal, linearSearch: preVal.linearSearch + 1 }
                })
            }
        }, 200);

        return () => clearInterval(interval)
    }, [countObj.linearSearch])

    let generateColorScheme=()=>{
        let colorScheme = dataToSearchArr.map((x)=>{
            if(x==snapshots.values[snapshots.values.length-1] && snapshots.status[iterationCounter] == true){
                return "rgb(0,255,0)"
            }
            else if(x==snapshots.values[countObj.linearSearch] ){
                return "rgb(255,0,0)";
            }
            else {
                return "rgb(125,125,125)";
            }
        })
        return colorScheme
    }

    const data = {
        labels:dataToSearchArr,
        datasets:[
            {
                label:"Data Points",
                data : dataToSearchArr,
                backgroundColor:generateColorScheme(),
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