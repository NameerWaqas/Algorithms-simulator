function BinarySearch(param, valToSearch) {
    let snapshots = {
        values:[],
        status:[]
    }
    valToSearch = parseInt(valToSearch)
    let data = param.split(' ')
    data = data.join("")
    data = param.split(',')
    data = data.map((str) => parseInt(str))
    let start = 0;
    let end = data.length - 1;
    let check = false;
    let mid;

    while (start <= end) {
        mid = parseInt((start + end)/2)
        // console.log(mid,"mid")
        if (data[mid] == valToSearch) {
            console.log(data[mid],valToSearch)
            check = true;
            snapshots.values.push(data[mid])
            snapshots.status.push(check)
            break;
        }
        else if (data[mid] < valToSearch) {
            start = mid + 1;
            // continue
        }
        else {
            end = mid - 1;
        }
        snapshots.values.push(data[mid]);
        snapshots.status.push(check);
    }
    return snapshots;
}

module.exports = BinarySearch