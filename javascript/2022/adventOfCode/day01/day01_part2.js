const fs = require('fs');

function getData() {
    try {
        return fs.readFileSync('javascript/2022/adventOfCode/inputs/day01.txt', 'utf8').split('\n\n');
    } catch (err) {
        console.error(err);
    }
}

let elfos = getData().map((element) => {
    return element.split('\n').reduce((acc, element) => {
        return parseInt(acc) + parseInt(element);
    }, 0);
}).filter( function (e) {
    return e > 0
})

elfos.sort().reverse()

tres_mayores = elfos.slice(1,4).reduce((acc, e) => {
    return acc + e;
}, 0)

console.log('Carga total de los tres más grandes: ', tres_mayores);
