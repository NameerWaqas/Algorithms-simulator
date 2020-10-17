import React from 'react';

export default function LinearSearch(param,valtoSearch){
    let snapshots = {
        values:[],
        status:false
    }
    let data = param.split(' ')
    data = data.join("")
    data = param.split(',')
    data = data.map((str)=>parseInt(str))
    for(var i=0;i<data.length;i++){
        snapshots.values.push(i)
        if(data[i]==valtoSearch){
            snapshots.status = true
            break;
        }
    }
    return snapshots;
}