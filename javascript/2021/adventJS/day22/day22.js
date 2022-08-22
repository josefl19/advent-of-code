function countDecorations(bigTree) {
    // ¡No olvides compartir tu solución en redes!
    const decoraciones = (rama) => {
        if(rama == null) {
            return 0
        }
        if(typeof rama === 'number') {
            return rama
        } else {
            return Object.values(rama).map(decoraciones).flat()
                         .filter((e) => e > 0)
                         .reduce((acc, elemento) => acc + elemento, 0);
        }
    }
     
    return decoraciones(bigTree)
}

// Pruebas
const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
    },
    right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null // no tiene más ramas
    }
}

countDecorations(tree) // 6

const bigTree = {
    value: 1,
    left: {
        value: 5,
        left: {
            value: 7,
            left: {
                value: 3,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },
    right: {
        value: 6,
        left: {
            value: 5,
            left: null,
            right: null
        },
        right: {
            value: 1,
            left: null,
            right: null
        }
    }
}

countDecorations(bigTree) // 28