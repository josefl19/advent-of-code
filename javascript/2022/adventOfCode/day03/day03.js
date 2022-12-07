import {getData} from '../readFile.js';

const rucksack = getData('day03.txt');
const priorities = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18,
    's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26,
    'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32, 'G': 33, 'H': 34, 'I': 35,
    'J': 36, 'K': 37, 'L': 38, 'M': 39, 'N': 40, 'O': 41, 'P': 42, 'Q': 43, 'R': 44,
    'S': 45, 'T': 46, 'U': 47, 'V': 48, 'W': 49, 'X': 50, 'Y': 51, 'Z': 52, 
}
let sum_total_priorities = 0;

/**
 * Function to get all equal items in both components
 */
const equal_items = ( first_compartment, second_compartment ) => {
    let same_items = [];

    [...first_compartment].forEach(item => {
        if( second_compartment.includes(item) ) {
            same_items.push(item);
        }
    });

    return same_items;
}

/**
 * Function to get the element with the higher priority
 */
const getHigherItem = (items) => {
    let higher_item = ''
    items.forEach(i => {
        if( !higher_item ) {
            higher_item = i;
        } else {
            if( priorities[i] > priorities[higher_item] ) higher_item = i;
        }
    });

    return higher_item;
}

rucksack.forEach(compartments => {
    let compartment_one = compartments.slice(0, compartments.length / 2)
    let compartment_two = compartments.slice(compartments.length / 2)

    let same_items = equal_items( compartment_one, compartment_two );
    let higher_item = getHigherItem( same_items );

    sum_total_priorities = sum_total_priorities + priorities[higher_item];
});

console.log(sum_total_priorities);
