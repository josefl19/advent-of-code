/**
 * El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
    
    Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
    Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente 
    y que, además, no vayan vacíos.

    ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen 
    que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

    Ejemplos:

    "bici coche (balón) bici coche peluche" // -> ✅
    "(muñeca) consola bici" // ✅

    "bici coche (balón bici coche" // -> ❌
    "peluche (bici [coche) bici coche balón" // -> ❌
    "(peluche {) bici" // -> ❌
    "() bici" // ❌

    Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. 
    ¡Y acaba con la travesura del Grinch!
 */

function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    var par_abierto = false;
    var par_cerrado = false;
    var otros = false;

    for (var i = 0; i <= letter.length; i++) {
        if (letter.charAt(i) == "(") {
            if (letter.charAt(i + 1) == ")") {
                otros = true;
            }
            par_abierto = true;
        }
        if (letter.charAt(i) == ")") {
            par_cerrado = true;
        }
        if (letter.charAt(i) == "]" || letter.charAt(i) == "[" || letter.charAt(i) == "}" || letter.charAt(i) == "{") {
            otros = true;
        }
    }

    if (par_cerrado && par_abierto && otros == false) {
        return true
    } else {
        return false
    }
}

const carta = 'bici coche (balón)[ bici coche peluche'
console.log(isValid(carta))