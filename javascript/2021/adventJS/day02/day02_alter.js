function listGifts(letter) {
    let regalos = letter.split(" ").map((regalo) => {
        if (!regalo.startsWith('_') && regalo != '') {
          return regalo
        }
    }).filter((regalo) => typeof regalo === 'string')
      
    let count = {}
    regalos.forEach((reg) => count[reg] = (count[reg] || 0) + 1)
  
    return count
}

// Otra posible opcion:
function listGifts2(letter) {
    let lista = letter.split(" ").map((regalo) => regalo.trim())
                                 .filter((regalo) => !regalo.startsWith('_') && regalo != '')
    
    let count = {}
    lista.forEach((reg) => count[reg] = (count[reg] || 0) + 1)

    return count
}

const carta = 'bici coche  balón _playstation bici coche peluche bici'
const regalos = listGifts(carta)
console.log(regalos)

// Prueba opcion 2:
const regalos2 = listGifts2(carta)
console.log(regalos2)