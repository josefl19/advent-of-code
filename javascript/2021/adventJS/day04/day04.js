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