// import React from 'react';
function LinearSearch(param,valtoSearch){
    let snapshots = {
        values:[],
        status:[]
    }
    let data = param.split(' ')
    data = data.join("")
    data = param.split(',')
    data = data.map((str)=>parseInt(str))
    for(var i=0;i<data.length;i++){
        snapshots.values.push(data[i])
        if(data[i]==valtoSearch){
            snapshots.status.push(true)
            break;
        }
        else{
            snapshots.status.push(false)
        }
    }
    return snapshots;
}

module.exports = LinearSearch