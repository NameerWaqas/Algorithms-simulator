export default function InsertionSort(param) {
    let snapshots = []
    let data = param.split(' ')
    data = data.join("")
    data = param.split(',')
    data = data.map((str) => parseInt(str))
    // slice() function is making copy of the array;
    snapshots.push(data.slice())

    for (var i = 1; i < data.length; i++) {
        let localI = i;
        while (true) {
            let temp;
            if (data[localI] < data[localI - 1] && localI > 0) {
                temp = data[localI];
                data[localI] = data[localI - 1];
                data[localI - 1] = temp;
                localI -= 1
            }
            else {
                break;
            }
        }
        snapshots.push(data.slice())
    }
    return snapshots;
}