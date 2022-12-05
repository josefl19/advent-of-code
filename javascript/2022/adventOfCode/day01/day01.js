import * as fs from 'fs';

function getData() {
    try {
        return fs.readFileSync('javascript/2022/adventOfCode/inputs/day01.txt', 'utf8').split('\n\n');
    } catch (err) {
        console.error(err);
    }
}

let mayor = [0, 0];
let elfos = getData().map((element, index) => {
    return [index, element.split('\n').reduce((acc, element) => {
        return parseInt(acc) + parseInt(element);
    }, 0)]
})

elfos.forEach(element => {
    if( element[1] > mayor[1] ) {
        mayor = [ element[0], element[1] ];
    }
});

console.log('Elfo con mayor peso: [pos, total]: ', mayor);
