const BubbleSort =  require('../Algorithms/Sorting/BubbleSort');
const SelectionSort = require('../Algorithms/Sorting/SelectionSort')
const InsertionSort = require('../Algorithms/Sorting/InsertionSort');
const CocktailSort = require('../Algorithms/Sorting/CocktailSort');

test("Bubble Sort algorithm Test 1",()=>{
    const result = BubbleSort('3,2,1');
    expect(result).toEqual([[3,2,1],[2,1,3],[1,2,3]])
});

test("Slection sort algorithm Test 1",()=>{
    const result  = SelectionSort('3,2,1');
    expect(result).toEqual([[3,2,1],[1,2,3],[1,2,3]]) 
});

test("Insertion sort algorithm Test 1",()=>{
    const result = InsertionSort('3,2,1');
    expect(result).toEqual([[3,2,1],[2,3,1],[1,2,3]])
});

test('Cocktail sort algorithm Test 1',()=>{
    const result = CocktailSort('3,2,1');
    expect(result).toEqual([[3,2,1],[1,2,3],[1,2,3]])
});