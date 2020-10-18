function CocktailSortFunc(param){
    
    let snapshots = [];
    let data = param.split(' ');
    data = data.join("");
    data = param.split(',');
    data = data.map((str) => parseInt(str));
    snapshots.push(data.slice())
    for (var i = 0, j = data.length - 2; i < parseInt((data.length) / 2) + data.length % 2; i++, j--) {
        let temp;
        for (var k = i; k < data.length - 1 - i; k++) {
            if (data[k] > data[k + 1]) {
                temp = data[k];
                data[k] = data[k + 1];
                data[k + 1] = temp;
            }
            // console.log(data)
        }
        for (var l = j; l > i; l--) {
            if (data[l] < data[l - 1]) {
                temp = data[l];
                data[l] = data[l - 1];
                data[l - 1] = temp;
            }
            // console.log(j,data)
        }
        snapshots.push(data.slice())
    }
    return snapshots
}

export default CocktailSort