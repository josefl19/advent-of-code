function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    let matchs = [...letter.matchAll(/\(([^)]+)\)/g)]

    if(matchs.length === 0) return false
  
    return matchs.every((value) => {
        return !["{", "[", "("].some((invalid)=> value[1].includes(invalid))
    })
}

const carta = 'bici coche (balón)[ bici coche peluche'
console.log(isValid(carta))