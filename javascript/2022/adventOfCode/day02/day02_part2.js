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

const equivalencias = {
    'A': 'X',
    'B': 'Y',
    'C': 'Z'
}

const resultado_jugada = ( rival, result_needed ) => {
    // X -> Lose de match
    if( result_needed === 'X' ) {
        return([ defeats[rival], 0 ])
    } else if( result_needed === 'Y' ) {     // Y -> Draw the match
        return( [equivalencias[rival], 3 ] )
    } else {    // Z -> Win de match
        return( [Object.keys(defeats).find( key => defeats[key] === rival) , 6 ])
    }
}

data.forEach(partida => {
    let oponente = partida.split(' ')[0];
    let result_needed = partida.split(' ')[1];
    let res = resultado_jugada(oponente, result_needed);

    total_score += res[1] + score_shape[res[0]];
});

console.log('Total: ', total_score)
