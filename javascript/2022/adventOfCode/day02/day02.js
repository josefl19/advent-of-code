import {getData} from '../readFile.js';

const data = getData('day02.txt');
let total_score = 0;

const defeats = {
    'X': 'C',
    'Z': 'B',
    'Y': 'A',
    'A': 'Z',
    'B': 'X',
    'C': 'Y'
}

const score_shape = {
    'X': 1,
    'Z': 3,
    'Y': 2
}

const resultado_jugada = ( rival, yo ) => {
    if ( defeats[yo] === rival ) {
        return 6;
    } else if ( defeats[rival] === yo ) {
        return 0;
    } else {
        return 3;
    }
}

data.forEach(partida => {
    let oponente = partida.split(' ')[0];
    let mi_tirada = partida.split(' ')[1];

    total_score += resultado_jugada(oponente, mi_tirada) + score_shape[mi_tirada];
});

console.log(total_score)