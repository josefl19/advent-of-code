const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

function contarOvejas(ovejas) {
    let filtro = ovejas.filter(function(element) {
        if (element.color == 'rojo' && (/[n]/i.test(element.name) && /[a]/i.test(element.name))) {
            return element
        }
    })

    return filtro
}

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)