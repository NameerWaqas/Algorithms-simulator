module.exports = function SelectionSort(param) {
    let snapshots = []
    let data = param.split(' ')
    data = data.join("")
    data = param.split(',')
    data = data.map((str) => parseInt(str))
    snapshots.push(data.slice())
    for (var i = 0; i < data.length - 1; i++) {
        let currentSmall = data[i];
        let currentSmallIndex = i;
        let temp;
        for (var j = i + 1; j < data.length; j++) {
            if (currentSmall > data[j]) {
                currentSmall = data[j]
                currentSmallIndex = j
            }
        }
        temp = data[i]
        data[i] = data[currentSmallIndex]
        data[currentSmallIndex] = temp
        snapshots.push(data.slice())
    }
    return snapshots
}