const LinearSearch = require('../Algorithms/Searching/LinearSearch');
const BinarySearch =  require('../Algorithms/Searching/BinarySearch');

test("Linear search algorithm Test 1",()=>{
    const result = LinearSearch('1,3,5,2,4,6',5);
    expect(result).toEqual({values:[1,3,5],status:[false,false,true]})
    // .toEqual for deep equality comparision
});

test("Binary search algortihm Test 1",()=>{
    const result = BinarySearch('1,3,5,7,2,4,6',5);
    expect(result).toEqual({
        values:[7,3,5],
        status:[false,false,true]
    })
});




