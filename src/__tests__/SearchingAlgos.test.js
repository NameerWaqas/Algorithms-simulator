const LinearSearch = require('../Algorithms/Searching/LinearSearch');

test("Linear search algorithm test 1",()=>{
    const result = LinearSearch('1,3,5,2,4,6',5);
    expect(result).toEqual({values:[1,3,5],status:[false,false,true]})
    // .toEqual for deep similarity comparision
})

