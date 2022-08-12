function listGifts(letter) {
    // ¡Tú puedes!
    const regalos = letter.split(" ")
    var lista = []

    regalos.forEach(function(element) {
        if (element.charAt(0) != '_' && element.charAt(0) != '') {
            lista.push(element)
        }
    })

    var count = {}
    lista.forEach(function(element) {
        count[element] = (count[element] || 0) + 1
    })

    return count
}

const carta = 'bici coche  balón _playstation bici coche peluche bici'
const regalos = listGifts(carta)
console.log(regalos)