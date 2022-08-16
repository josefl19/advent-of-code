function checkSledJump(heights) {
    var optimo = true;
    // Index de la altura máxima
    var max = heights.indexOf(Math.max(...heights));

    // Verificar que la altura max no sea la ultima del arreglo.
    if (max === (heights.length - 1)) optimo = false;

    // Verificar que antes de la altura max todos los valores son incrementales.
    for (let i = 0; i < max; i++) {
        if (heights[i] >= heights[i + 1]) optimo = false;
    }

    // verificar que de la altura maxima las demas vayan decreciendo.
    for (let i = max; i < heights.length; i++) {
        if (heights[i] <= heights[i + 1]) optimo = false;
    }

    return optimo;
}

// Pruebas
console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!