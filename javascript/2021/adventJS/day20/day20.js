function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!
    let caracteres = "abcdefghijklmnñopqrstuvwxyz".split("")
    let carta = letter.normalize("NFD")
       .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
       .normalize()
       .toLowerCase()
       .split("")
     
    return caracteres.every((c) => carta.includes(c))
}

// Pruebas
console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false