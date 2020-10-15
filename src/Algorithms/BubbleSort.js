export default function BubbleSort(param){
    let snapshots = []
    let data = param.split(' ')
    data = data.join("")
    // data = data.
    // console.log(param)
    data = param.split(',')
    data = data.map((str)=>parseInt(str))
    // slice() function is making copy of the array;
    snapshots.push(data.slice())
    for(let i=0;i<data.length-1;i++){
      for(let j=0;j<data.length-1-i;j++){  
          if(data[j]>data[j+1]){          
            let temp = data[j];
            data[j] = data[j+1]
            data[j+1]=temp
          }
        }
        snapshots.push(data.slice())
      }
      // console.log(snapshots[snapshots.length-1])
    return snapshots
  }