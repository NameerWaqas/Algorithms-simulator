export default function BubbleSort(data){
    let snapshots = []
    // slice() function is making copy of the array;
    snapshots.push(data.slice())
    for(var i=0;i<data.length;i++){
  
      for(var j=i+1;j<data.length;j++){  
          if(data[i]>data[j]){          
            let temp = data[i];
            data[i] = data[j]
            data[j]=temp
          }
          snapshots.push(data.slice())
        }
      }

    return snapshots
  }