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

const getGroups = (elves) => {
    let groups = [];
    for (let i = 0; i < elves.length; i += 3) {
        groups.push( elves.slice(i, i+3) )
    }

    return groups;
}

const same_items = ( [first_elve, ...group] ) => {
    let same_item = [];

    [...first_elve].forEach( i => {
        if( group[0].includes(i) && group[1].includes(i) && !same_item.includes(i) ) {
            same_item.push(i);
        }
    });

    return same_item;
}

const elves_groups = getGroups(rucksack);
let sum_total_priorities = 0;

elves_groups.forEach(group => {
    let letter_group = same_items(group);
    sum_total_priorities = sum_total_priorities + priorities[letter_group];
});

console.log(sum_total_priorities);
