import {getData} from '../readFile.js';

const pairs = getData('day04.txt').map((pair => {
    return pair.split(',');
}))

let assigments_contain_others = 0;
let assigments_overlap = 0;

pairs.forEach( pair => {
    let assigment_one = pair[0].split('-');
    let assigment_two = pair[1].split('-');

    assigment_one = [ parseInt(assigment_one[0]), parseInt(assigment_one[1]) ];
    assigment_two = [ parseInt(assigment_two[0]), parseInt(assigment_two[1]) ];

    /**
     * Part 1. In how many assignment pairs does one range fully contain the other?
     */
    if( (assigment_two[0] >= assigment_one[0] && assigment_two[1] <= assigment_one[1]) 
            || (assigment_one[0] >= assigment_two[0] && assigment_one[1] <= assigment_two[1]) ) assigments_contain_others++;

    /**
     * Part 2. In how many assignment pairs do the ranges overlap?
     */
    if( ( assigment_two[0] >= assigment_one[0] || assigment_two[1] < assigment_one[1] )) assigments_overlap++;
})

console.log(assigments_contain_others);
console.log(assigments_overlap);
