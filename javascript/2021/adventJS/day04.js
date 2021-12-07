/**
 * ¡Es hora de poner el árbol de navidad en casa! 🎄
 * 
 * Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
 * Si le pasamos el argumento 5, se pintaría esto:
    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____

    Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. 
    Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
    Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

    Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
 */

function createXmasTree(height) {
    var arbol = ''
    var base = ''

    for (var i = 1; i <= height; i++) {
        var hoja = '*'.repeat((i * 2) - 1)
        var raya = '_'.repeat(height - i)

        arbol = arbol + raya + hoja + raya + '\n'

        if (i == 1) {
            var tronco = '#'.repeat((i * 2) - 1)
            base = base + raya + tronco + raya
        }
    }

    return arbol + base + '\n' + base
}

var arbol = createXmasTree(7)
console.log(arbol)