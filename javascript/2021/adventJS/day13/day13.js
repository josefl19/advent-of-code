function wrapGifts(gifts) {
    var tamanos = [];
    var cuerpo = [];
    gifts.forEach(function(g) {
        tamanos.push(g.length);
        cuerpo.push('*' + g + '*');
    });

    var max = Math.max(...tamanos);
    var base = '*'.repeat(max + 2);
    return [base, ...cuerpo, base];
}

// Pruebas
console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/