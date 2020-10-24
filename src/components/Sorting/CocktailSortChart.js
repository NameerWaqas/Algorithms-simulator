import React, { useContext } from 'react';
import BarChartComponent from './SortingBarChart';
import CocktailSortFunc from '../../Algorithms/Sorting/CocktailSort';
import {context} from '../../context';

export default function CocktailSortChart(props){
    let contextData = useContext(context);
    let dataToSort = contextData[0];
    let CocktailSortSnapshots = CocktailSortFunc(dataToSort)

return(
    <BarChartComponent snapshots={CocktailSortSnapshots} name="Cocktail Sort"/>
)
}
