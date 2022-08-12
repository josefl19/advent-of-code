const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

function contarOvejas(ovejas) {
    // aquí tu magia
    const validas = []
    ovejas.forEach(function(element) {
        if (element.color == 'rojo' && (/[n]/i.test(element.name) && /[a]/i.test(element.name))) {
            validas.push(element)
        }
    })

    return validas
}

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)